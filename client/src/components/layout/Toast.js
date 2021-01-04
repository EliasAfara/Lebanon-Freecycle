import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cogoToast from 'cogo-toast';

const Toast = ({ toastObj: { msg, alertType } }) => {
  useEffect(() => {
    if (msg && alertType === 'success') {
      cogoToast.success(msg, {
        hideAfter: 5,
        position: 'bottom-right',
      });
    } else if (msg && alertType === 'warning') {
      cogoToast.warn(msg, {
        hideAfter: 5,
        position: 'bottom-right',
      });
    } else if (msg && alertType === 'danger') {
      cogoToast.error(msg, {
        hideAfter: 5,
        position: 'bottom-right',
      });
    }
  }, [msg, alertType]);
  return <></>;
};

Toast.propTypes = {
  toastObj: PropTypes.object.isRequired,
};

// Fetch alert state (Mapping redux state into a props)
const mapStateToProps = (state) => ({
  toastObj: state.toast,
});

export default connect(mapStateToProps)(Toast);
