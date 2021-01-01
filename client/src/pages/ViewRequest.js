import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSingleRequest } from '../actions/requests';
import Spinner from '../components/Spinner/Spinner';
import SingleItem from '../components/SingleItem/SingleItem';

const ViewRequest = ({
  getSingleRequest,
  requests: { singleRequests, singleRequestLoading },
  match,
}) => {
  const userIDInParam = match.params.id;
  useEffect(() => {
    getSingleRequest(userIDInParam);
  }, [getSingleRequest, userIDInParam]);
  return (
    <div>
      {singleRequestLoading || singleRequests === null ? (
        <Spinner />
      ) : (
        <>
          <SingleItem item={singleRequests} />
        </>
      )}
    </div>
  );
};

ViewRequest.propTypes = {
  getSingleRequest: PropTypes.func.isRequired,
  requests: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  requests: state.requests,
});

export default connect(mapStateToProps, { getSingleRequest })(ViewRequest);
