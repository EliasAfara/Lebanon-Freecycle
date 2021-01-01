import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
// Redux
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { updateRequestStatus, deleteRequest } from '../../actions/requests';

// Styled Components
import * as S from './ItemCardElements';
import { formatDate, formatDateMDY } from '../../utils/formatDate';
// React Icons
import { FaEllipsisV } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { FaCheckSquare } from 'react-icons/fa';
import { BsHeart } from 'react-icons/bs';

// Ant Design Delete Model

import { Image } from 'antd';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

const ItemCard = ({
  updateRequestStatus,
  deleteRequest,
  UserAvatar,
  FullName,
  Username,
  ItemName,
  ItemCategory,
  ItemLocation,
  ItemAddress,
  ItemDescription,
  ItemDateOfCreation,
  ItemID,
  ItemUserId,
  ItemStatus,
  likes,
  images,
  type,
  auth,
  showActions,
}) => {
  const node = useRef();
  const [openActions, setOpenActions] = useState(false);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside component click
      return;
    }
    // outside component click
    setOpenActions(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClick); // left click

    return () => {
      // clean up
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleComplete = () => {
    let newStatus = '';
    if (ItemStatus === 'Available') {
      newStatus = 'Completed';
    } else {
      newStatus = 'Available';
    }
    setOpenActions(!openActions);
    confirm({
      title: 'Are you sure?',
      icon: <ExclamationCircleOutlined />,
      content: 'Do you really want to update this item status?',
      okText: 'Update',
      okType: 'primary',
      cancelText: 'Cancel',
      centered: true,
      onOk() {
        updateRequestStatus(ItemID, newStatus);
        console.log('Updated');
      },
      onCancel() {
        console.log('Canceled');
      },
    });
  };

  const handleDelete = () => {
    setOpenActions(!openActions);
    confirm({
      title: 'Are you sure?',
      icon: <ExclamationCircleOutlined />,
      content:
        'Do you really want to delete this post? This process cannot be undone.',
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      centered: true,
      onOk() {
        deleteRequest(ItemID);
        console.log('Deleted');
      },
      onCancel() {
        console.log('Canceled');
      },
    });
  };

  const CardActionsDropDown = () => (
    <S.DropdownActionsList>
      {showActions && (
        <>
          {!auth.authLoading && auth.isAuthenticated ? (
            ItemUserId === auth.user._id ? (
              <>
                {ItemStatus === 'Available' && (
                  <Link
                    to={`/edit-${type}/${ItemID}`}
                    onClick={() => setOpenActions(!openActions)}
                  >
                    <S.DropdownAction>
                      <S.ActionIcon>
                        <FaEdit style={{ color: '#1890ff' }} />
                      </S.ActionIcon>
                      Edit
                    </S.DropdownAction>
                  </Link>
                )}

                <S.DropdownAction
                  onClick={handleComplete}
                  style={{ cursor: 'pointer' }}
                >
                  <S.ActionIcon>
                    <FaCheckSquare
                      style={{
                        color: `${
                          ItemStatus === 'Available' ? 'grey' : 'green'
                        }`,
                      }}
                    />
                  </S.ActionIcon>
                  {ItemStatus === 'Available' ? <>Completed</> : <>Available</>}
                </S.DropdownAction>

                <S.DropdownAction
                  onClick={handleDelete}
                  style={{ cursor: 'pointer' }}
                >
                  <S.ActionIcon>
                    <FaTrash style={{ color: 'red' }} />
                  </S.ActionIcon>
                  Delete
                </S.DropdownAction>
              </>
            ) : (
              <S.DropdownAction
                onClick={() => setOpenActions(!openActions)}
                style={{ cursor: 'pointer' }}
              >
                <span style={{ color: 'red' }}>Report</span>
              </S.DropdownAction>
            )
          ) : (
            <S.DropdownAction
              onClick={() => setOpenActions(!openActions)}
              style={{ cursor: 'pointer' }}
            >
              <span style={{ color: 'red' }}>Report</span>
            </S.DropdownAction>
          )}
          <S.DropdownAction
            onClick={() => setOpenActions(!openActions)}
            style={{ cursor: 'pointer' }}
          >
            <span style={{ color: 'Blue' }}>Share</span>
          </S.DropdownAction>
        </>
      )}
    </S.DropdownActionsList>
  );

  return (
    <>
      <div
        style={{
          filter: `contrast(${ItemStatus === 'Available' ? 100 : 50}%)`,
        }}
      >
        <S.Wrapper>
          <S.Card
            style={{
              background: `${ItemStatus === 'Available' ? '#fafffa' : '#fff'}`,
            }}
          >
            {images && images.length > 0 && (
              <S.CardImage>
                <Image
                  src={images[0].imageURL}
                  alt='Request Image'
                  title='Click to preview'
                  loading='lazy'
                  draggable='false'
                  width={'100%'}
                  height={'100%'}
                  style={{ cursor: 'pointer' }}
                />
              </S.CardImage>
            )}

            <S.CardContent
              style={{ width: `${images && images.length === 0 && '100%'}` }}
            >
              <S.ContentDetails>
                <S.ContentHeader>
                  {UserAvatar && (
                    <Link to={`/profile/${Username}`}>
                      <S.HeaderAvatar
                        src={UserAvatar}
                        alt='User Avatar'
                        loading='lazy'
                        draggable='false'
                      />
                    </Link>
                  )}

                  {FullName && (
                    <S.HeaderUserFullName>
                      <Link
                        to={`/profile/${Username}`}
                        style={{
                          paddingBottom: '1px',
                          color: 'rgba(var(--i1d, 38, 38, 38), 1)',
                        }}
                      >
                        {FullName}
                      </Link>
                    </S.HeaderUserFullName>
                  )}

                  {/* NEEDS IS AUTHENTICATED CONDITION TO BE ADDED */}
                  <S.HeaderEllipsis ref={node}>
                    <FaEllipsisV
                      onClick={() => setOpenActions(!openActions)}
                      style={{ width: '4px', cursor: 'pointer' }}
                    />

                    {openActions && <CardActionsDropDown />}
                  </S.HeaderEllipsis>
                  {/* NEEDS IS AUTHENTICATED CONDITION TO BE ADDED */}
                </S.ContentHeader>
                <S.DetailsUnOrderedList>
                  {ItemName && (
                    <S.ListItems>
                      <S.ListItemSpan>
                        <S.ListItemName>Item: </S.ListItemName>
                        {ItemName}
                      </S.ListItemSpan>
                    </S.ListItems>
                  )}

                  {ItemCategory && (
                    <S.ListItems>
                      <S.ListItemSpan>
                        <S.ListItemName>Category: </S.ListItemName>
                        {ItemCategory}
                      </S.ListItemSpan>
                    </S.ListItems>
                  )}

                  {ItemLocation && (
                    <S.ListItems>
                      <S.ListItemSpan>
                        <S.ListItemName>Location: </S.ListItemName>
                        {ItemLocation}
                      </S.ListItemSpan>
                    </S.ListItems>
                  )}

                  {ItemAddress && (
                    <S.ListItems>
                      <S.ListItemSpan>
                        <S.ListItemName>Address: </S.ListItemName>
                        {ItemAddress}
                      </S.ListItemSpan>
                    </S.ListItems>
                  )}
                </S.DetailsUnOrderedList>

                {ItemDescription && (
                  <S.ItemDescriptionDiv>
                    <S.ItemDescription>
                      <S.ListItemName>Description: </S.ListItemName>
                      {ItemDescription}
                    </S.ItemDescription>
                  </S.ItemDescriptionDiv>
                )}

                <S.ContentFooter>
                  <>
                    <S.ContentBtn style={{ marginRight: '5px' }}>
                      <BsHeart style={{ color: '#f05f70' }} />{' '}
                      {likes && likes.length > 0 && likes.length}
                    </S.ContentBtn>
                    {ItemStatus === 'Available' && (
                      <S.ContentBtn>
                        <Link to={`/${type}/${ItemID}`}>View More</Link>
                      </S.ContentBtn>
                    )}
                  </>
                  {ItemDateOfCreation && (
                    <S.ContentDate>
                      <time
                        dateTime={ItemDateOfCreation}
                        title={formatDateMDY(ItemDateOfCreation)}
                      >
                        {formatDate(ItemDateOfCreation)}
                      </time>
                    </S.ContentDate>
                  )}
                </S.ContentFooter>
              </S.ContentDetails>
            </S.CardContent>
          </S.Card>
        </S.Wrapper>
      </div>
    </>
  );
};

ItemCard.defaultProps = {
  showActions: true,
};

ItemCard.propTypes = {
  updateRequestStatus: PropTypes.func.isRequired,
  deleteRequest: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { updateRequestStatus, deleteRequest })(
  ItemCard
);
