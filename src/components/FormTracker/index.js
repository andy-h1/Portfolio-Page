import React from 'react';
import { number, string } from 'prop-types';
import firebase from '../../firebase';

export const FormTracker = ({ age, email, id, name }) => {
  const handleClick = () => {
    firebase.firestore().collection('users').doc(id).delete();
  };

  console.log(id);
  return (
    <div>
      <h3>User</h3>
      <ul>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Age: {age}</li>
      </ul>
      <button type="button" onClick={handleClick}>
        x
      </button>
    </div>
  );
};

FormTracker.propTypes = {
  age: number.isRequired,
  email: string.isRequired,
  id: string.isRequired,
  name: string.isRequired
};
