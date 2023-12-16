import { useState } from "react";

export const useForm = (callback, validateInput, initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (Object.keys(errors).length === 0) {
      try {
        await callback(values, setValues);
      } catch (error) {
        console.log({ error });
      }
      setIsSubmitting(false);
      setErrors(errors);
    }
  };

  const handleBlur = () => {
    const specialErrors = validateInput(values);
    setErrors(specialErrors);
    if (Object.keys(specialErrors).length > 0) {
      setIsSubmitting(false);
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
    errors,
  };
};
