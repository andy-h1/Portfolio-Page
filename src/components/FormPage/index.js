import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';
import { UserCard } from '../UserCard';
import { useForm } from '../UseForm';
import * as S from './styles';

export const FormPage = () => {
  // eslint-disable-next-line no-use-before-define
  const { handleChange, handleSubmit, values } = useForm(addUserData);
  const [showPassword, setShowPassword] = useState(false);
  const [userList, setUserList] = useState([]);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  function addUserData() {
    firebase.firestore().collection('users').add({
      values
    });
    // .then(() => {
    //   values('');
    // });
  }

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('users')
      .onSnapshot((snapshot) => {
        const newUserList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        setUserList(newUserList);
        console.log(newUserList);
      });

    return () => unsubscribe();
  }, []);

  return (
    <S.PageWrapper>
      <S.Title>Sign Up Form</S.Title>
      <S.Form onSubmit={handleSubmit} noValidate>
        <S.Input
          id="username"
          value={values.name}
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <S.Input
          id="email"
          name="email"
          value={values.email}
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <S.Input
          id="age"
          name="age"
          value={values.age}
          type="number"
          placeholder="Age"
          onChange={handleChange}
        />
        <S.PasswordWrapper>
          <S.Input
            id="password"
            name="password"
            value={values.password}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <S.ShowPasswordButton type="button" onClick={togglePassword} />
        </S.PasswordWrapper>
        <S.Button type="submit">Register</S.Button>
      </S.Form>

      <S.UserCardWrapper>
        {userList &&
          userList.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              age={user.values.age}
              email={user.values.email}
              name={user.values.username}
            />
          ))}
      </S.UserCardWrapper>
    </S.PageWrapper>
  );
};

// Name - capitalize name
// Age - can only be between 18-60
// Password - must include capital letter, number and be 8 characters long
// Retype password - must match password
// Email verification sent?
// Form validation

// Update data on Firestore - option to edit on user card
// Empty update state that takes in the changes
// Pushes the changes to Firestore
// Re-render the updated changes
