import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';
import { UserCard } from '../UserCard';
import * as S from './styles';

export const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userList, setUserList] = useState([]);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const addUserData = (event) => {
    event.preventDefault();

    firebase
      .firestore()
      .collection('users')
      .add({
        name,
        age,
        email,
        password
      })
      .then(() => {
        setName('');
        setAge('');
        setEmail('');
        setPassword('');
      });
  };

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

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <S.PageWrapper>
      <S.Title>Sign Up Form</S.Title>
      <S.Form onSubmit={addUserData}>
        <S.Input
          id="name"
          value={name}
          type="text"
          placeholder="Username"
          onChange={handleNameChange}
          required
        />
        <S.Input
          id="email"
          value={email}
          type="email"
          placeholder="Email Address"
          onChange={handleEmailChange}
          required
        />
        <S.Input
          id="age"
          value={age}
          type="number"
          placeholder="Age"
          min="18"
          max="60"
          onChange={handleAgeChange}
        />
        <S.PasswordWrapper>
          <S.Input
            id="password"
            value={password}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            onChange={handlePasswordChange}
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
              age={user.age}
              email={user.email}
              name={user.name}
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
