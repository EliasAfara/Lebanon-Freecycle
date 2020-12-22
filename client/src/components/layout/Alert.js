import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alert }) =>
  alert !== null &&
  alert.length > 0 &&
  alert.map((alertIndex) => (
    // JSX
    <div
      key={alertIndex.id}
      className={`alert alert-${alertIndex.alertType}`}
      role='alert'
    >
      {
        // alert message
        alertIndex.msg
      }
    </div>
  ));

Alert.propTypes = {
  alert: PropTypes.array.isRequired,
};

// Fetch alert state (Mapping redux state into a props)
const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps)(Alert);
