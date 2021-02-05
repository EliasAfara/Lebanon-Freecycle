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

export const validateChangePasswordForm = (values) => {
  let ChangePasswordErrors = {};

  if (!values.oldPassword) {
    ChangePasswordErrors.oldPassword = 'Old password is required';
  }
  if (!values.newPassword) {
    ChangePasswordErrors.newPassword = 'New password is required';
  } else if (values.newPassword.length < 6) {
    ChangePasswordErrors.newPassword =
      'Please enter a new password with 6 or more characters';
  }

  if (!values.confirmNewPassword) {
    ChangePasswordErrors.confirmNewPassword = 'Confirm password is required';
  } else if (values.newPassword !== values.confirmNewPassword) {
    ChangePasswordErrors.confirmNewPassword =
      'Please make sure your new passwords match';
  }

  return ChangePasswordErrors;
};

export const validateEditProfileForm = (values) => {
  let EditProfileErrors = {};

  if (!values.fullname) {
    EditProfileErrors.fullname = 'Full Name is required';
  } else if (values.fullname.length < 2 || values.fullname.length > 30) {
    EditProfileErrors.fullname =
      'Full Name is required to be between 2-30 characters';
  }

  if (!values.email) {
    EditProfileErrors.email = 'Email is required';
  } else if (!emailRegex.test(values.email)) {
    EditProfileErrors.email = 'Invalid email address. e.g., email@example.com';
  }

  if (!values.username) {
    EditProfileErrors.username = 'Username is required';
  } else if (values.username.length < 5) {
    EditProfileErrors.username =
      'Username is required to be at least 5 characters';
  } else if (!usernameRegex.test(values.username)) {
    EditProfileErrors.username =
      'Username can only use letters, numbers, underscores and periods';
  }

  if (values.bio.length > 255) {
    EditProfileErrors.bio = 'Bio is required to be at most 255 characters';
  }

  return EditProfileErrors;
};

export const validateDonationsForm = (values) => {
  let DonationsErrors = {};

  if (!values.name) {
    DonationsErrors.name = 'Name is required';
  } else if (values.name.length < 2 || values.name.length > 40) {
    DonationsErrors.name = 'Name is required to be between 2-40 characters';
  }

  if (!values.category) {
    DonationsErrors.category = 'Category is required';
  }
  if (!values.locationName) {
    DonationsErrors.locationName = 'Location is required';
  }
  if (!values.address) {
    DonationsErrors.address = 'Address is required';
  }

  if (!values.description) {
    DonationsErrors.description = 'Description is required';
  } else if (values.description.length < 5 || values.description.length > 255) {
    DonationsErrors.description =
      'Description is required to be between 5-255 characters';
  }

  if (values.phoneNumber.length < 11 || values.phoneNumber.length > 12) {
    DonationsErrors.phoneNumber = 'Invalid phone number';
  }

  return DonationsErrors;
};

export const validateRequestsForm = (values) => {
  let RequestsErrors = {};

  if (!values.name) {
    RequestsErrors.name = 'Name is required';
  } else if (values.name.length < 2 || values.name.length > 40) {
    RequestsErrors.name = 'Name is required to be between 2-40 characters';
  }

  if (!values.category) {
    RequestsErrors.category = 'Category is required';
  }

  if (!values.description) {
    RequestsErrors.description = 'Description is required';
  } else if (values.description.length < 5 || values.description.length > 255) {
    RequestsErrors.description =
      'Description is required to be between 5-255 characters';
  }

  if (values.phoneNumber.length < 11 || values.phoneNumber.length > 12) {
    RequestsErrors.phoneNumber = 'Invalid phone number';
  }

  return RequestsErrors;
};

export const validateContactUsForm = (values) => {
  let ContactUsErrors = {};

  if (!values.name) {
    ContactUsErrors.name = 'Name is required';
  } else if (values.name.length < 2 || values.name.length > 40) {
    ContactUsErrors.name = 'Name is required to be between 2-40 characters';
  }

  if (!values.email) {
    ContactUsErrors.email = 'Email is required';
  } else if (!emailRegex.test(values.email)) {
    ContactUsErrors.email = 'Invalid email address. e.g., email@example.com';
  }

  if (!values.subject) {
    ContactUsErrors.subject = 'Subject is required';
  } else if (values.subject.length < 2 || values.subject.length > 40) {
    ContactUsErrors.subject =
      'Subject is required to be between 2-40 characters';
  }

  if (!values.message) {
    ContactUsErrors.message = 'Message is required';
  }

  return ContactUsErrors;
};
