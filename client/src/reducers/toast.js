import { SET_TOAST, REMOVE_TOAST } from '../actions/types';

const initialState = { toast: {} };

export default function toast(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TOAST:
      return {
        toast: payload,
      };
    case REMOVE_TOAST: // Remove specific alert by its ID
      return {
        toast: {},
      };
    default:
      return state;
  }
}
