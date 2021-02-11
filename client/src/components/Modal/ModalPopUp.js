import React from 'react';
import Popup from 'reactjs-popup';

const ModalPopUp = ({ show, onHide, actions }) => {
  return (
    <Popup open={show} closeOnDocumentClick onClose={onHide}>
      <div className='modal'>
        <div className='actions-popup'>
          {actions}
          <button className='action-popup-button' onClick={onHide}>
            Cancel
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default ModalPopUp;
