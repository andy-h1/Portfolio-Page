import React from 'react';
import * as S from './styles';

export const Form = () => (
  <div>
    <h2>Sign Up Form</h2>
    <S.Form>
      <label htmlFor="name">
        Name:
        <input id="name" type="text" placeholder="Enter full name" />
      </label>
      <label htmlFor="age">
        Age:
        <input id="age" type="number" placeholder="Enter age" />
      </label>
      <label htmlFor="email">
        Email:
        <input id="email" type="email" placeholder="Enter email address" />
      </label>
      <label htmlFor="password">
        Password:
        <input id="password" type="password" placeholder="Enter password" />
      </label>
      <label htmlFor="password">
        Retype Password:
        <input id="password" type="password" placeholder="Enter password" />
      </label>
    </S.Form>
  </div>
);

// Name - must be no longer than 100 characters
// Email - must be a valid email address
// Age - can only be between 18-60
// Password - must include capital letter, number and be 8 characters long
// Retype password - must match password
// Submit - connect to firebase
// Email verification sent?
