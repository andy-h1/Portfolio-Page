import { useState } from 'react';

export const useForm = (callback) => {
  const [values, setValues] = useState({
    username: '',
    age: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    callback();
  };

  return {
    handleChange,
    handleSubmit,
    values
  };
};
