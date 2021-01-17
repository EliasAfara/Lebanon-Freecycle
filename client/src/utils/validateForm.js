var emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//var usernameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

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
