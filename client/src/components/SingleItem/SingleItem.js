import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { formatDate, formatDateMDY } from '../../utils/formatDate';
import AuthenticatedUserActions from '../Modal/AuthenticatedUserActions';
import GuestUserActions from '../Modal/GuestUserActions';

import './SingleItem.css';
import ShareIcon from '../SVGComponents/ShareIcon';
import { Tooltip, Tag } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { VscEllipsis } from 'react-icons/vsc';
import { BsFillHeartFill, BsHeart } from 'react-icons/bs';
import { RiUserLocationFill, RiPhoneFill } from 'react-icons/ri';
import { MdLocationCity } from 'react-icons/md';
import { SiGooglestreetview } from 'react-icons/si';
import loadable from '@loadable/component';

const ImageSlider = loadable(() => import('../ImageSlider/ImageSlider'));
const Map = loadable(() => import('../Map'));
const ModalPopUp = loadable(() => import('../Modal/ModalPopUp'));

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
    address,
    location,
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
        {images && <ImageSlider images={images} interval={4000} fade={true} />}
      </div>

      <div className='item-title-container'>
        <h1 className='item-title'>
          <strong>{name}</strong>
        </h1>
        <div className='item-title-leftside-content'>
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
              width='40px'
              height='40px'
            />
          </Link>
          <div className='header-info-wrapper'>
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
        <div>
          <div className='item-body-tags'>
            <Tag>{category}</Tag>
            {status === 'Available' ? (
              <Tag icon={<ClockCircleOutlined />} color='processing'>
                {status}
              </Tag>
            ) : (
              <Tag icon={<CheckCircleOutlined />} color='success'>
                {status}
              </Tag>
            )}
          </div>
          <div className='item-body-info-line'>
            <span className='item-body-info-details'>{description}</span>
            {status === 'Available' && (
              <div className='item-body-contact'>
                <div className='item-body-info-details'>
                  {location && (
                    <span className='item-details-contact-wrapper'>
                      <MdLocationCity />{' '}
                      <span className='item-details-contact'>
                        {location.locationName}
                      </span>
                    </span>
                  )}

                  {address && (
                    <span className='item-details-contact-wrapper'>
                      <RiUserLocationFill />{' '}
                      <span className='item-details-contact'>{address}</span>
                    </span>
                  )}

                  <span className='item-details-contact-wrapper'>
                    <RiPhoneFill />{' '}
                    <a
                      href={`tel:${lebanesePhoneNumber}`}
                      className='item-details-contact'
                    >
                      {lebanesePhoneNumber}
                    </a>
                  </span>
                  {location && (
                    <span className='item-details-contact-wrapper'>
                      <SiGooglestreetview />{' '}
                      <a
                        href={location.googleMapLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='item-details-contact'
                      >
                        View on Google Map
                      </a>
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {location && status === 'Available' && (
        <div
          style={{
            marginTop: '20px',
            marginBottom: '10px',
            position: 'relative',
          }}
        >
          <Map singleMarker={true} singleLocationData={location} />
        </div>
      )}
    </div>
  );
};

export default React.memo(SingleItem);
