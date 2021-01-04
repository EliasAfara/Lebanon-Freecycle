import { SET_TOAST, REMOVE_TOAST } from '../actions/types';

const initialState = {};

export default function toast(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TOAST:
      return payload;

    case REMOVE_TOAST:
      return {};

    default:
      return state;
  }
}
