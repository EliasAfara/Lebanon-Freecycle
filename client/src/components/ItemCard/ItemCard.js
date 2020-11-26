import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaEllipsisV } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

// Styled Components
import * as S from './ItemCardElements';

const ItemCard = ({
  ItemImage,
  UserAvatar,
  FullName,
  Username,
  ItemName,
  ItemCategory,
  ItemState,
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

  const handleDelete = () => {
    setOpenActions(!openActions);
    // pop up
    // delete function
  };

  const CardActionsDropDown = () => (
    <S.DropdownActionsList>
      <Link
        to={`/edit-donation/${ItemID}`}
        onClick={() => setOpenActions(!openActions)}
      >
        <S.DropdownAction>
          <S.ActionIcon>
            <FaEdit />
          </S.ActionIcon>
          Edit
        </S.DropdownAction>
      </Link>

      <S.DropdownAction onClick={handleDelete}>
        <S.ActionIcon>
          <FaTrash />
        </S.ActionIcon>
        Delete
      </S.DropdownAction>
    </S.DropdownActionsList>
  );

  return (
    <>
      <div style={{ filter: `contrast(${ItemStatus ? 100 : 50}%)` }}>
        <S.Wrapper>
          <S.Card>
            {ItemImage && (
              <S.CardImage>
                <S.ItemImage src={ItemImage} alt='Item' />
              </S.CardImage>
            )}

            <S.CardContent>
              <S.ContentDetails>
                <S.ContentHeader>
                  <Link to={`/profile/${Username}`}>
                    <S.HeaderAvatar src={UserAvatar} alt='User Avatar' />
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
                  <S.HeaderEllipsis ref={node}>
                    <FaEllipsisV
                      onClick={() => setOpenActions(!openActions)}
                      style={{ width: '4px', cursor: 'pointer' }}
                    />

                    {openActions && <CardActionsDropDown />}
                  </S.HeaderEllipsis>
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
                      <S.ListItemName>State: </S.ListItemName>
                      {ItemState}
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
                    <S.ContentBtn>
                      <Link to={`/donation/${ItemID}`}>View More</Link>
                    </S.ContentBtn>
                  )}

                  <S.ContentDate>{ItemDateOfCreation}</S.ContentDate>
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
