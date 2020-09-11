import { useState } from 'react';

export const useForm = (callback, validateInput, initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(false);
      try {
        await callback(values, setValues);
      } catch (error) {
        console.log({ error });
      }
      setIsSubmitting(true);
      setErrors(errors);
    }
  };

  const handleBlur = () => {
    const specialErrors = validateInput(values);
    setErrors(specialErrors);
    if (Object.keys(specialErrors).length > 0) {
      setIsSubmitting(true);
    } else {
      setIsSubmitting(false);
      setErrors({});
    }
  };

  return {
    handleChange,
    handleSubmit,
    handleBlur,
    isSubmitting,
    values,
    setValues,
    errors
  };
};
