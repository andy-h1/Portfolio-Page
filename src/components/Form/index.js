import React from 'react';
import * as S from './styles';

export const Form = () => (
  <div>
    <h2>Sign Up Form</h2>
    <S.Form>
      <label>
        Name:
        <input type="text" placeholder="Enter full name" />
      </label>
      <label>
        Age:
        <input type="number" placeholder="Enter age" />
      </label>
      <label>
        Email:
        <input type="email" placeholder="Enter email address" />
      </label>
      <label>
        Password:
        <input type="password" placeholder="Enter password" />
      </label>
    </S.Form>
  </div>
);

// Name
// Email
// Age
// Password
// Retype password
