import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';

export default combineReducers({
  // Will take in an object (whose values are reducers) that has all the reduces I create ex: auth reducer
  auth,
  alert,
});

// Flow of redux:
// To add new recources and fuctionality, you can just simply create a new reducer and a new actions file and then create the components
