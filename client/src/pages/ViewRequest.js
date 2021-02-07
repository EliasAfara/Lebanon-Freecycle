import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getSingleRequest,
  updateRequestStatus,
  deleteRequest,
  likeUnlikeRequest,
} from '../actions/requests';
import Spinner from '../components/Spinner/Spinner';
import SingleItem from '../components/SingleItem/SingleItem';

// Ant Design Delete Model
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

const ViewRequest = ({
  getSingleRequest,
  updateRequestStatus,
  deleteRequest,
  likeUnlikeRequest,
  requests: {
    singleRequests,
    singleRequestLoading,
    singleRequestRedirectOnDelete,
  },
  auth,
  match,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const userIDInParam = match.params.id;

  useEffect(() => {
    getSingleRequest(userIDInParam);
  }, [getSingleRequest, userIDInParam]);

  const handleComplete = () => {
    let newStatus = '';
    if (singleRequests.status === 'Available') {
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
        updateRequestStatus(singleRequests._id, newStatus);
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
        deleteRequest(singleRequests._id);
        // console.log('Deleted');
      },
      onCancel() {
        console.log('Canceled');
      },
    });
  };

  if (singleRequestRedirectOnDelete) return <Redirect to='/requests' />;

  return (
    <div style={{ width: '100%', maxWidth: '700px' }}>
      {singleRequestLoading || singleRequests === null ? (
        <Spinner />
      ) : (
        <>
          <SingleItem
            item={singleRequests}
            auth={auth}
            type='request'
            handleComplete={handleComplete}
            handleDelete={handleDelete}
            updateRequestLikes={likeUnlikeRequest}
            modalShow={modalShow}
            onClickShowModal={() => setModalShow(true)}
            onClickHideModal={() => setModalShow(false)}
          />
        </>
      )}
    </div>
  );
};

ViewRequest.propTypes = {
  getSingleRequest: PropTypes.func.isRequired,
  updateRequestStatus: PropTypes.func.isRequired,
  deleteRequest: PropTypes.func.isRequired,
  likeUnlikeRequest: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  requests: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  requests: state.requests,
});

export default connect(mapStateToProps, {
  getSingleRequest,
  updateRequestStatus,
  deleteRequest,
  likeUnlikeRequest,
})(ViewRequest);
