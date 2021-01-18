var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
var usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

export const validateLoginForm = (values) => {
  let loginErrors = {};

  if (!values.email) {
    loginErrors.email = 'Email is required';
  } else if (!emailRegex.test(values.email)) {
    loginErrors.email = 'Invalid email address. e.g., email@example.com';
  }

  if (!values.password) {
    loginErrors.password = 'Password is required';
  }

  return loginErrors;
};

export const validateRegisterForm = (values) => {
  let registerErrors = {};

  if (!values.fullname) {
    registerErrors.fullname = 'Full Name is required';
  } else if (values.fullname.length < 2 || values.fullname.length > 30) {
    registerErrors.fullname =
      'Full Name is required to be between 2-30 characters';
  }

  if (!values.email) {
    registerErrors.email = 'Email is required';
  } else if (!emailRegex.test(values.email)) {
    registerErrors.email = 'Invalid email address. e.g., email@example.com';
  }

  if (!values.user_name) {
    registerErrors.user_name = 'Username is required';
  } else if (values.user_name.length < 5) {
    registerErrors.user_name =
      'Username is required to be at least 5 characters';
  } else if (!usernameRegex.test(values.user_name)) {
    registerErrors.user_name =
      'Username can only use letters, numbers, underscores and periods';
  }

  if (!values.password) {
    registerErrors.password = 'Password is required';
  } else if (values.password.length < 6) {
    registerErrors.password =
      'Please enter a password with 6 or more characters';
  }

  if (values.password !== values.password2) {
    registerErrors.password2 = 'Please make sure your passwords match';
  }

  return registerErrors;
};
