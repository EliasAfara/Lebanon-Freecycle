// Alert types
export const SET_ALERT = 'Alert/set';
export const REMOVE_ALERT = 'Alert/removed';

// Toast types
export const SET_TOAST = 'Toast/set';
export const REMOVE_TOAST = 'Toast/removed';

// Registration types
export const REGISTER_SUCCESS = 'Register/success';
export const REGISTER_FAIL = 'Register/fail';

// Authentication types
export const USER_LOADED = 'Auth/userLoaded';
export const AUTH_ERROR = 'Auth-Error/userNotLoaded';

// Login types
export const LOGIN_SUCCESS = 'Login/success';
export const LOGIN_FAIL = 'Login/fail';
export const LOGOUT = 'Logout';

// Profile types
export const GET_USER_PROFILE = 'User-Profile/get';
export const CLEAR_USER_PROFILE = 'User-Profile/cleared';
export const UPDATE_USER_PROFILE = 'User-Profile/updated';
export const CLEAR_PROFILE = 'User-Profile/cleared';
export const ACCOUNT_DELETED = 'Account/deleted';
export const USER_PROFILE_ERROR = 'User-Profile/error';

export const UPDATE_USER_PASSWORD = 'User-Password-Update/success';
export const UPDATE_USER_PASSWORD_ERROR = 'User-Password-Update/error';

// Request Types
export const GET_ALL_REQUESTS = 'Requests/getAll';

export const GET_ALL_USER_REQUESTS = 'User-Requests/getAll';
export const CLEAR_USER_REQUESTS = 'User-Requests/cleared';

export const GET_A_SINGLE_REQUEST = 'Single-Request/get';
export const CLEAR_SINGLE_REQUEST = 'Single-Request/cleared';

export const REQUESTS_ERROR = 'Requests/error';

export const CREATE_A_REQUEST_SUCCESS = 'Create-Request/success';
export const CREATE_REQUEST_FAIL = 'Create-Request/fail';

export const UPDATE_A_REQUEST_SUCCESS = 'Update-Request/success';
export const UPDATE_REQUEST_STATUS_SUCCESS = 'Update-Request-Status/success';
export const UPDATE_REQUEST_FAIL = 'Update-Request/fail';

export const DELETE_A_REQUEST = 'Delete-Request/success';

// Donations Types
export const GET_ALL_DONATIONS = 'Donations/getAll';

export const GET_ALL_USER_DONATIONS = 'User-Donations/getAll';
export const CLEAR_USER_DONATIONS = 'User-Donations/cleared';

export const GET_A_SINGLE_DONATION = 'Single-Donation/get';
export const CLEAR_SINGLE_DONATION = 'Single-Donation/cleared';

export const DONATIONS_ERROR = 'Donations/error';

export const CREATE_A_DONATION_SUCCESS = 'Create-Donation/success';
export const CREATE_DONATION_FAIL = 'Create-Donation/fail';

export const ADD_A_DONATION_LOCATION = 'Donation-Location/added';

export const UPDATE_A_DONATION_SUCCESS = 'Update-Donation/success';
export const UPDATE_DONATION_STATUS_SUCCESS = 'Update-Donation-Status/success';
export const UPDATE_DONATION_FAIL = 'Update-Donation/fail';

export const DELETE_A_DONATION = 'Delete-Donation/success';

// Form Loading
export const LOGIN_FORM_LOADING = 'Login-Form/loading';
export const REGISTER_FORM_LOADING = 'Register-Form/loading';
export const DONATION_FORM_LOADING = 'Donation-Form/loading';
export const REQUEST_FORM_LOADING = 'Request-Form/loading';

// Filtering
export const REQUEST_FILTER_STATUS = 'Requests-Filter/Status';
export const REQUEST_FILTER_CATEGORY = 'Requests-Filter/Category';

export const DONATION_FILTER_LOCATION = 'Donations-Filter/Location';
export const DONATION_FILTER_CATEGORY = 'Donations-Filter/Category';
export const DONATION_FILTER_STATUS = 'Donations-Filter/Status';

// Pagination
export const DONATION_PAGINATION = 'All-Donations/Pagination';
export const REQUEST_PAGINATION = 'All-Requests/Pagination';

// Likes & Unlike Donatinons & Requests
export const DONATION_LIKE_UNLIKE = 'Donation/Liked-Unliked';
export const DONATION_LIKE_UNLIKE_ERROR = 'Donation-Error/Liked-Unliked';

export const REQUEST_LIKE_UNLIKE = 'Request/Liked-Unliked';
export const REQUEST_LIKE_UNLIKE_ERROR = 'Request-Error/Liked-Unliked';

// Partial Search
export const REQUEST_PARTIAL_SEARCH = 'Requests/Partial-Search';
export const DONATION_PARTIAL_SEARCH = 'Donations/Partial-Search';
