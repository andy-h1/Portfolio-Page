import { useState, useEffect } from 'react';

export const useForm = (callback, validateInput) => {
  const [values, setValues] = useState({
    username: '',
    age: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateInput(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, isSubmitting]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};
