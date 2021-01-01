import React from 'react';
import ImageSlider from './ImageSlider';

import { formatDate, formatDateMDY } from '../../utils/formatDate';
import './SingleItem.css';
import { Link } from 'react-router-dom';

const SingleItem = ({
  item: {
    user,
    name,
    category,
    description,
    phoneNumber,
    images,
    likes,
    comments,
    date,
    map,
  },
}) => {
  return (
    <>
      {images && <ImageSlider images={images} />}

      <h1 className='item-title'>
        <strong>{name}</strong>
      </h1>

      <div className='item-header'>
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
          <span className='dot-divider'>.</span>
          <time dateTime={date} title={formatDateMDY(date)}>
            {formatDate(date)}
          </time>
        </h4>
      </div>

      <div className='item-body-container'>
        <div>
          <div>
            <span>Category: </span>
            <span>{category}</span>
          </div>
          <div>
            <span>Description: </span>
            <span>{description}</span>
          </div>
        </div>
        <div>
          <span>Phone Number</span>
          <span>{phoneNumber}</span>
        </div>
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
    </>
  );
};

export default SingleItem;
