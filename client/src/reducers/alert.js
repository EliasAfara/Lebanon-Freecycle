import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function alert(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload]; // Add to the initialState array
    case REMOVE_ALERT: // Remove specific alert by its ID
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
