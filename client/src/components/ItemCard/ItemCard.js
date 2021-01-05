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
import { BsFillHeartFill, BsHeart } from 'react-icons/bs';

import ImageSlider from '../ImageSlider/ImageSlider';
// Ant Design Delete Model
import { Modal, Tag, Divider } from 'antd';
import {
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
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
  const [liked, addLike] = useState(false);

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
          filter: `contrast(${ItemStatus === 'Available' ? 100 : 75}%)`,
        }}
      >
        <S.Wrapper>
          <S.Card currentStatus={ItemStatus}>
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
                      {ItemLocation && (
                        <S.ItemLocation>{ItemLocation}</S.ItemLocation>
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

                <S.ItemDescriptionDiv>
                  {ItemName && (
                    <>
                      <S.ItemName>Name: </S.ItemName>
                      {ItemName}
                    </>
                  )}

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
                      <S.LikeWrapper>
                        <span
                          onClick={() => addLike(!liked)}
                          style={{ cursor: 'pointer' }}
                        >
                          {liked ? (
                            <BsFillHeartFill
                              style={{
                                color: '#f05f70',
                                marginRight: `${
                                  likes && likes.length > 0 ? '8px' : 0
                                }`,
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

                      <Link to={`/${type}/${ItemID}`}>View Details</Link>
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
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { updateRequestStatus, deleteRequest })(
  ItemCard
);
