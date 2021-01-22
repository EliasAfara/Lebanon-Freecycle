import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalPopUp = ({ show, onHide, actions }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size='sm'
        aria-labelledby='actions'
        centered
      >
        <Modal.Body>
          <div className='actions-popup'>
            {actions}
            <button className='action-popup-button' onClick={onHide}>
              Cancel
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalPopUp;
