import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import loadable from '@loadable/component';

import {
  getSingleDonation,
  updateDonationStatus,
  deleteDonation,
  likeUnlikeDonation,
} from '../actions/donations';
import Spinner from '../components/Spinner/Spinner';

// Ant Design Delete Model
import { Modal, Space, Spin } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

const SingleItem = loadable(
  () => import('../components/SingleItem/SingleItem'),
  {
    fallback: (
      <div style={{ textAlign: 'center' }}>
        <Space size='middle'>
          <Spin size='large' />
        </Space>
      </div>
    ),
  }
);

const ViewDonation = ({
  getSingleDonation,
  updateDonationStatus,
  deleteDonation,
  likeUnlikeDonation,
  donations: {
    singleDonations,
    singleDonationLoading,
    singleDonationRedirectOnDelete,
  },
  auth,
  match,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const userIDInParam = match.params.id;

  useEffect(() => {
    getSingleDonation(userIDInParam);
  }, [getSingleDonation, userIDInParam]);

  const handleComplete = () => {
    let newStatus = '';
    if (singleDonations.status === 'Available') {
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
        updateDonationStatus(singleDonations._id, newStatus);
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
        deleteDonation(singleDonations._id);
        // console.log('Deleted');
      },
      onCancel() {
        console.log('Canceled');
      },
    });
  };

  if (singleDonationRedirectOnDelete) return <Redirect to='/donations' />;

  return (
    <div style={{ width: '100%', maxWidth: '700px' }}>
      {singleDonationLoading || singleDonations === null ? (
        <Spinner />
      ) : (
        <>
          <SingleItem
            item={singleDonations}
            auth={auth}
            type='donation'
            handleComplete={handleComplete}
            handleDelete={handleDelete}
            updateDonationLikes={likeUnlikeDonation}
            modalShow={modalShow}
            onClickShowModal={() => setModalShow(true)}
            onClickHideModal={() => setModalShow(false)}
          />
        </>
      )}
    </div>
  );
};

ViewDonation.propTypes = {
  getSingleDonation: PropTypes.func.isRequired,
  updateDonationStatus: PropTypes.func.isRequired,
  deleteDonation: PropTypes.func.isRequired,
  likeUnlikeDonation: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  donations: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  donations: state.donations,
});

export default connect(mapStateToProps, {
  getSingleDonation,
  updateDonationStatus,
  deleteDonation,
  likeUnlikeDonation,
})(ViewDonation);
