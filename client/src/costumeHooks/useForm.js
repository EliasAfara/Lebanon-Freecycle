import { useState } from 'react';

const useForm = (initialValues, validateForm, submitForm) => {
  const [formData, setFormData] = useState(initialValues);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    e.persist();
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));

    // Reset Errors
    setErrors((errors) => ({ ...errors, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentErrors = validateForm(formData);
    setErrors(currentErrors);

    if (Object.keys(currentErrors).length === 0) {
      submitForm(formData);
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
