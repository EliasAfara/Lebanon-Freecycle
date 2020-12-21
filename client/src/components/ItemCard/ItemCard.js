import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
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
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

const ItemCard = ({
  ItemImage,
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
  ItemStatus,
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
    setOpenActions(!openActions);
    // update item state from available to completed
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
        console.log('Deleted');
      },
      onCancel() {
        console.log('Canceled');
      },
    });
  };

  const CardActionsDropDown = () => (
    <S.DropdownActionsList>
      <Link
        to={`/edit-donation/${ItemID}`}
        onClick={() => setOpenActions(!openActions)}
      >
        <S.DropdownAction>
          <S.ActionIcon>
            <FaEdit style={{ color: '#1890ff' }} />
          </S.ActionIcon>
          Edit
        </S.DropdownAction>
      </Link>

      <S.DropdownAction onClick={handleComplete} style={{ cursor: 'pointer' }}>
        <S.ActionIcon>
          <FaCheckSquare style={{ color: 'green' }} />
        </S.ActionIcon>
        Completed
      </S.DropdownAction>

      <S.DropdownAction onClick={handleDelete} style={{ cursor: 'pointer' }}>
        <S.ActionIcon>
          <FaTrash style={{ color: 'red' }} />
        </S.ActionIcon>
        Delete
      </S.DropdownAction>
    </S.DropdownActionsList>
  );

  return (
    <>
      <div style={{ filter: `contrast(${ItemStatus ? 100 : 50}%)` }}>
        <S.Wrapper>
          <S.Card style={{ background: `${ItemStatus ? '#fafffa' : '#fff'}` }}>
            {ItemImage && (
              <S.CardImage>
                <S.ItemImage src={ItemImage} alt='Item' draggable='false' />
              </S.CardImage>
            )}

            <S.CardContent>
              <S.ContentDetails>
                <S.ContentHeader>
                  <Link to={`/profile/${Username}`}>
                    <S.HeaderAvatar
                      src={UserAvatar}
                      alt='User Avatar'
                      draggable='false'
                    />
                  </Link>

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
                  <S.ListItems>
                    <S.ListItemSpan>
                      <S.ListItemName>Item: </S.ListItemName>
                      {ItemName}
                    </S.ListItemSpan>
                  </S.ListItems>
                  <S.ListItems>
                    <S.ListItemSpan>
                      <S.ListItemName>Category: </S.ListItemName>
                      {ItemCategory}
                    </S.ListItemSpan>
                  </S.ListItems>
                  <S.ListItems>
                    <S.ListItemSpan>
                      <S.ListItemName>Location: </S.ListItemName>
                      {ItemLocation}
                    </S.ListItemSpan>
                  </S.ListItems>
                  <S.ListItems>
                    <S.ListItemSpan>
                      <S.ListItemName>Address: </S.ListItemName>
                      {ItemAddress}
                    </S.ListItemSpan>
                  </S.ListItems>
                </S.DetailsUnOrderedList>
                <S.ItemDescriptionDiv>
                  <S.ItemDescription>
                    <S.ListItemName>Description: </S.ListItemName>
                    {ItemDescription}
                  </S.ItemDescription>
                </S.ItemDescriptionDiv>

                <S.ContentFooter>
                  {ItemStatus && (
                    <>
                      <S.ContentBtn style={{ marginRight: '5px' }}>
                        <BsHeart style={{ color: '#f05f70' }} /> 12
                      </S.ContentBtn>
                      <S.ContentBtn>
                        <Link to={`/donation/${ItemID}`}>View More</Link>
                      </S.ContentBtn>
                    </>
                  )}

                  <S.ContentDate>
                    <time
                      dateTime={ItemDateOfCreation}
                      title={formatDateMDY(ItemDateOfCreation)}
                    >
                      {formatDate(ItemDateOfCreation)}
                    </time>
                  </S.ContentDate>
                </S.ContentFooter>
              </S.ContentDetails>
            </S.CardContent>
          </S.Card>
        </S.Wrapper>
      </div>
    </>
  );
};

export default ItemCard;
