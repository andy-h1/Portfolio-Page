import { useState } from 'react';

export const useForm = (callback, validateInput, initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const specialErrors = validateInput(values);

    setErrors(specialErrors);

    if (Object.keys(specialErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await callback(values, setValues);
      } catch (error) {
        console.log({ error });
      }
      setIsSubmitting(false);
    }
  };

  return {
    handleChange,
    handleSubmit,
    isSubmitting,
    values,
    setValues,
    errors
  };
};
