import React, { useState } from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';

import { Link } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';

import AuthenticatedUserActions from '../Modal/AuthenticatedUserActions';
import GuestUserActions from '../Modal/GuestUserActions';
import {
  updateRequestStatus,
  deleteRequest,
  likeUnlikeRequest,
} from '../../actions/requests';
import {
  updateDonationStatus,
  deleteDonation,
  likeUnlikeDonation,
} from '../../actions/donations';

// Styled Components
import * as S from './ItemCardElements';
import { formatDate, formatDateMDY } from '../../utils/formatDate';
// React Icons
import { VscEllipsis } from 'react-icons/vsc';
import { BsFillHeartFill, BsHeart } from 'react-icons/bs';

// Ant Design Delete Model
import { Modal, Tag, Divider } from 'antd';
import {
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
const { confirm } = Modal;

const ImageSlider = loadable(() => import('../ImageSlider/ImageSlider'));
const ModalPopUp = loadable(() => import('../Modal/ModalPopUp'));

const ItemCard = ({
  updateRequestStatus,
  deleteRequest,
  updateDonationStatus,
  deleteDonation,
  likeUnlikeRequest,
  likeUnlikeDonation,
  UserAvatar,
  FullName,
  Username,
  ItemName,
  ItemCategory,
  ItemLocation,
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

  let likedByCurrentUser = false;

  if (!auth.authLoading && auth.isAuthenticated) {
    likedByCurrentUser = likes
      .map((like) => like.user === auth.user?._id)
      .includes(true);
  }

  const [liked, addLike] = useState(likedByCurrentUser);

  const handleItemLike = () => {
    if (type === 'donation') {
      likeUnlikeDonation(ItemID, ItemUserId);
    } else if (type === 'request') {
      likeUnlikeRequest(ItemID, ItemUserId);
    }
    addLike(!liked);
  };

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
        if (type === 'donation') {
          updateDonationStatus(ItemID, newStatus);
        } else if (type === 'request') {
          updateRequestStatus(ItemID, newStatus);
        }
        // console.log('Updated');
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
        if (type === 'donation') {
          deleteDonation(ItemID);
        } else if (type === 'request') {
          deleteRequest(ItemID);
        }
        // console.log('Deleted');
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
          filter: `contrast(${ItemStatus === 'Available' ? 100 : 75}%)`,
        }}
      >
        <S.Wrapper>
          <S.Card currentStatus={ItemStatus}>
            <S.ContentHeaderV2>
              {UserAvatar && (
                <Link to={`/profile/${Username}`}>
                  <S.HeaderAvatar
                    src={UserAvatar}
                    alt='User Avatar'
                    loading='lazy'
                    draggable='false'
                    width='35'
                    height='35'
                  />
                </Link>
              )}

              {FullName && (
                <S.HeaderUserFullName>
                  <Link
                    to={`/profile/${Username}`}
                    style={{
                      paddingBottom: '1px',
                      color: 'inherit',
                    }}
                  >
                    {FullName}
                  </Link>
                  {ItemLocation && (
                    <S.ItemLocation>
                      <S.ItemLocationLink
                        href={ItemLocation.googleMapLink}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {ItemLocation.locationName +
                          ' - ' +
                          ItemLocation.district}
                      </S.ItemLocationLink>
                    </S.ItemLocation>
                  )}
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
            </S.ContentHeaderV2>

            {images && images.length > 0 && (
              <S.CardImage>
                <ImageSlider images={images} itemName={ItemName} />
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
                        width='35'
                        height='35'
                      />
                    </Link>
                  )}

                  {FullName && (
                    <S.HeaderUserFullName>
                      <Link
                        to={`/profile/${Username}`}
                        style={{
                          paddingBottom: '1px',
                          color: 'inherit',
                        }}
                      >
                        {FullName}
                      </Link>
                      {ItemLocation && (
                        <S.ItemLocation>
                          <S.ItemLocationLink
                            href={ItemLocation.googleMapLink}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            {ItemLocation.locationName +
                              ' - ' +
                              ItemLocation.district}
                          </S.ItemLocationLink>
                        </S.ItemLocation>
                      )}
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
                    auth.user !== null &&
                    !auth.authLoading &&
                    auth.isAuthenticated ? (
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

                <S.ItemDescriptionDiv>
                  {ItemName && <S.ItemName>{ItemName}</S.ItemName>}

                  {ItemDescription && (
                    <S.ItemDescription>{ItemDescription}</S.ItemDescription>
                  )}
                </S.ItemDescriptionDiv>
                <S.ContentFooter>
                  {ItemCategory && (
                    <S.FooterTags>
                      <Tag color='default'>{ItemCategory}</Tag>
                      {ItemStatus === 'Available' ? (
                        <Tag icon={<ClockCircleOutlined />} color='processing'>
                          {ItemStatus}
                        </Tag>
                      ) : (
                        <Tag icon={<CheckCircleOutlined />} color='success'>
                          {ItemStatus}
                        </Tag>
                      )}
                    </S.FooterTags>
                  )}
                  <S.LowerFooter>
                    <>
                      {!auth.authLoading && auth.isAuthenticated ? (
                        <>
                          <S.LikeWrapper>
                            <span
                              onClick={handleItemLike}
                              style={{
                                cursor: 'pointer',
                                marginRight: `${
                                  likes && likes.length > 0 ? '8px' : '0px'
                                }`,
                              }}
                            >
                              {liked ? (
                                <BsFillHeartFill
                                  style={{
                                    color: '#f05f70',
                                    fontSize: '16px',
                                  }}
                                />
                              ) : (
                                <BsHeart
                                  style={{
                                    color: '#f05f70',

                                    fontSize: '16px',
                                  }}
                                />
                              )}
                            </span>
                            {likes && likes.length > 0 && <>{likes.length}</>}
                          </S.LikeWrapper>

                          <Divider type='vertical' />
                        </>
                      ) : (
                        likes &&
                        likes.length > 0 && (
                          <>
                            <span>
                              {likes.length}{' '}
                              {likes.length > 1 ? 'Likes' : 'Like'}
                            </span>
                            <Divider type='vertical' />
                          </>
                        )
                      )}

                      <S.ViewItemDetailsLink to={`/${type}/${ItemID}`}>
                        View Details
                      </S.ViewItemDetailsLink>
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
                  </S.LowerFooter>
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
  updateDonationStatus: PropTypes.func.isRequired,
  deleteDonation: PropTypes.func.isRequired,
  likeUnlikeRequest: PropTypes.func.isRequired,
  likeUnlikeDonation: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default React.memo(
  connect(mapStateToProps, {
    updateRequestStatus,
    deleteRequest,
    updateDonationStatus,
    deleteDonation,
    likeUnlikeRequest,
    likeUnlikeDonation,
  })(ItemCard)
);
