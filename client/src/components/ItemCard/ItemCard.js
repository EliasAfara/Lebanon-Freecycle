import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';

import ModalPopUp from '../Modal/ModalPopUp';
import AuthenticatedUserActions from '../Modal/AuthenticatedUserActions';
import GuestUserActions from '../Modal/GuestUserActions';
import { updateRequestStatus, deleteRequest } from '../../actions/requests';

// Styled Components
import * as S from './ItemCardElements';
import { formatDate, formatDateMDY } from '../../utils/formatDate';
// React Icons
import { VscEllipsis } from 'react-icons/vsc';
import { BsHeart } from 'react-icons/bs';

import ImageSlider from '../ImageSlider/ImageSlider';
// Ant Design Delete Model
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
}) => {
  const [modalShow, setModalShow] = useState(false);

  const handleComplete = () => {
    let newStatus = '';
    if (ItemStatus === 'Available') {
      newStatus = 'Completed';
    } else {
      newStatus = 'Available';
    }

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
                <ImageSlider images={images} interval={null} fade={false} />
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

                  <S.HeaderEllipsis onClick={() => setModalShow(true)}>
                    <VscEllipsis
                      style={{
                        width: '20px',
                        height: '20px',
                      }}
                    />
                  </S.HeaderEllipsis>
                </S.ContentHeader>

                <ModalPopUp
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  actions={
                    !auth.authLoading && auth.isAuthenticated ? (
                      ItemUserId === auth.user._id ? (
                        <AuthenticatedUserActions
                          itemStatus={ItemStatus}
                          editLink={`/edit-${type}/${ItemID}`}
                          onClickHandleComplete={handleComplete}
                          onClickHandleDelete={handleDelete}
                          onHide={() => setModalShow(false)}
                        />
                      ) : (
                        <GuestUserActions />
                      )
                    ) : (
                      <GuestUserActions />
                    )
                  }
                />

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

                    <S.ContentBtn>
                      <Link to={`/${type}/${ItemID}`}>View More</Link>
                    </S.ContentBtn>
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

ItemCard.propTypes = {
  updateRequestStatus: PropTypes.func.isRequired,
  deleteRequest: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { updateRequestStatus, deleteRequest })(
  ItemCard
);
