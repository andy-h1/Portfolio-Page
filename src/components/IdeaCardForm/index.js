import { useState } from 'react';

export const IdeaCardForm = () => {
  const [values, setValues] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
    console.log(values);
  };

  return {
    handleChange
  };
};
