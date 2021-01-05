import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { formatDate, formatDateMDY } from '../../utils/formatDate';
import ModalPopUp from '../Modal/ModalPopUp';
import AuthenticatedUserActions from '../Modal/AuthenticatedUserActions';
import GuestUserActions from '../Modal/GuestUserActions';
import ImageSlider from '../ImageSlider/ImageSlider';
import './SingleItem.css';
import { VscEllipsis } from 'react-icons/vsc';
import ShareIcon from '../SVGComponents/ShareIcon';
import { BsFillHeartFill, BsHeart } from 'react-icons/bs';
import { Tooltip, Tag } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';

const SingleItem = ({
  item: {
    user,
    _id,
    name,
    category,
    description,
    phoneNumber,
    images,
    status,
    likes,
    comments,
    date,
    map,
  },
  auth,
  type,
  handleComplete,
  handleDelete,
  modalShow,
  onClickShowModal,
  onClickHideModal,
}) => {
  const [liked, addLike] = useState(false);

  let lebanesePhoneNumber = `+961 ${phoneNumber.slice(3)}`;
  return (
    <div className='single-item-container'>
      <div className='single-item-image-slider'>
        {images && <ImageSlider images={images} interval={3000} fade={true} />}
      </div>

      <div className='item-title-container'>
        <h1 className='item-title'>
          <strong>{name}</strong>
        </h1>
        <div className='item-title-leftside-content'>
          {status === 'Available' ? (
            <Tag
              icon={<ClockCircleOutlined />}
              color='processing'
              style={{ fontSize: 'inherit' }}
            >
              {status}
            </Tag>
          ) : (
            <Tag
              icon={<CheckCircleOutlined />}
              color='success'
              style={{ fontSize: 'inherit' }}
            >
              {status}
            </Tag>
          )}
          <span className='header-love-icon' onClick={() => addLike(!liked)}>
            {liked ? (
              <BsFillHeartFill style={{ color: '#f05f70' }} />
            ) : (
              <Tooltip title='Love' color={'#f05f70'}>
                <BsHeart />
              </Tooltip>
            )}
          </span>
          {likes && likes.length > 0 && (
            <span className='header-love-score'>{likes.length}</span>
          )}
        </div>
      </div>

      <div className='item-header'>
        <div className='item-header-info'>
          <Link to={`/profile/${user.username}`}>
            <img
              src={user.avatar}
              alt='User Avatar'
              className='user-avatar'
              loading='lazy'
              draggable='false'
            />
          </Link>
          <Link to={`/profile/${user.username}`}>
            <h4 className='user-fullname'>{user.fullname}</h4>
          </Link>
          <h4 className='header-date'>
            <span className='dot-divider'>•</span>
            <time dateTime={date} title={formatDateMDY(date)}>
              {formatDate(date)}
            </time>
          </h4>
        </div>
        <div className='header-icons-container'>
          <span className='header-icon-span'>
            <ShareIcon />
          </span>
          <span className='header-icon-span' onClick={onClickShowModal}>
            <VscEllipsis style={{ width: '25px', height: '25px' }} />
          </span>
        </div>
      </div>

      <ModalPopUp
        show={modalShow}
        onHide={onClickHideModal}
        actions={
          !auth.authLoading && auth.isAuthenticated ? (
            user.id === auth.user._id ? (
              <AuthenticatedUserActions
                itemStatus={status}
                editLink={`/edit-${type}/${_id}`}
                onClickHandleComplete={handleComplete}
                onClickHandleDelete={handleDelete}
                onHide={onClickHideModal}
              />
            ) : (
              <GuestUserActions />
            )
          ) : (
            <GuestUserActions />
          )
        }
      />

      <div className='item-body-container'>
        <div className='item-body-info'>
          <div className='item-body-info-line'>
            <h2 className='item-body-info-title'>Category</h2>
            <span className='item-body-info-details'>{category}</span>
          </div>
          <div className='item-body-info-line'>
            <h2 className='item-body-info-title'>Description</h2>
            <span className='item-body-info-details'>{description}</span>
          </div>
        </div>
        {status === 'Available' && (
          <div className='item-body-contact'>
            <h2 className='item-body-info-title'>Phone Number</h2>
            <span className='item-body-info-details'>
              {lebanesePhoneNumber}
            </span>
          </div>
        )}
      </div>

      {map && (
        <div
          style={{
            background: '#fff',
            width: '700px',
            height: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          MAP
        </div>
      )}
    </div>
  );
};

export default SingleItem;
