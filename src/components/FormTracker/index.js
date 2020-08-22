import React from 'react';
import { number, string } from 'prop-types';

export const FormTracker = ({ age, email, name }) => (
  <div>
    <h3>User</h3>
    <ul>
      <li>Name:{name}</li>
      <li>Email: {email}</li>
      <li>Age: {age}</li>
    </ul>
  </div>
);

FormTracker.propTypes = {
  age: number.isRequired,
  email: string.isRequired,
  name: string.isRequired
};
