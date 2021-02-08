import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import profile from './profile';
import toast from './toast';
import requests from './requests';
import donations from './donations';
import filters from './filters';
import pagination from './pagination';
import search from './search';

export default combineReducers({
  // Will take in an object (whose values are reducers) that has all the reduces I create ex: auth reducer
  auth,
  profile,
  requests,
  donations,
  pagination,
  filters,
  search,
  alert,
  toast,
});

// Flow of redux:
// To add new recources and fuctionality, you can just simply create a new reducer and a new actions file and then create the components
