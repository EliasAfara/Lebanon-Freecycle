import React from 'react';
import { Link } from 'react-router-dom';
import './ModalPopUp.css';

const AuthenticatedUserActions = ({
  itemStatus,
  editLink,
  onClickHandleComplete,
  onClickHandleDelete,
  onHide,
}) => {
  const handleStatusUpdate = () => {
    onHide();
    onClickHandleComplete();
  };
  const handleRequestDelete = () => {
    onHide();
    onClickHandleDelete();
  };
  return (
    <>
      <button className='action-popup-button' onClick={handleStatusUpdate}>
        {itemStatus === 'Available' ? (
          <>Change status to completed</>
        ) : (
          <>Change status to available</>
        )}
      </button>
      {itemStatus === 'Available' && (
        <Link to={editLink} className='action-popup-link' onClick={onHide}>
          Edit
        </Link>
      )}

      <button
        className='action-popup-button action-popup-button-danger'
        onClick={handleRequestDelete}
      >
        Delete
      </button>
    </>
  );
};

export default AuthenticatedUserActions;
