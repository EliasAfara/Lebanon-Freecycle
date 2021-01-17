import { useState } from 'react';

const useForm = (validateLoginForm, loginUser) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    e.persist();
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value, // This way we can handleChange on every field
    }));

    // Reset Errors
    setErrors((errors) => ({ ...errors, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentErrors = validateLoginForm(formData);
    setErrors(currentErrors);

    if (Object.keys(currentErrors).length === 0) {
      loginUser(email, password);
    }
  };

  return {
    handleChange,
    handleSubmit,
    formData,
    errors,
  };
};

export default useForm;
