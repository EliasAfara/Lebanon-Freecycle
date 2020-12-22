import { SET_TOAST, REMOVE_TOAST } from './types';

// Dsipatch the type and payload of set alert to the reducer which will adds the alert to the state, which initally is an empty array.
export const setToast = (msg, alertType) => (dispatch) => {
  dispatch({
    type: SET_TOAST,
    payload: { msg, alertType },
  });

  setTimeout(() => dispatch({ type: REMOVE_TOAST }), 5000);
};
