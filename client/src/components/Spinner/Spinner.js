import React from 'react';

const Spinner = ({ size }) => {
  if (!size) {
    size = 'la-2x';
  }
  return (
    <div className='spinner-container'>
      <div className={`spinner ${size}`}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
