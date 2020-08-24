import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';
import { UserList } from '../UserList';
import * as S from './styles';

export const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userList, setUserList] = useState([]);

  const handleClick = (event) => {
    event.preventDefault();
    console.log({ name, age, email, password });

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
    firebase
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
    <div>
      <h2>Sign Up Form</h2>
      <S.Form onSubmit={handleClick}>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            name={name}
            type="text"
            placeholder="John Doe"
            onChange={handleNameChange}
            required
          />
        </label>
        <label htmlFor="age">
          Age:
          <input
            id="age"
            name={age}
            type="number"
            placeholder="25"
            min="18"
            max="60"
            onChange={handleAgeChange}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            name={email}
            type="email"
            placeholder="johndoe@gmail.com"
            onChange={handleEmailChange}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            id="password"
            name={password}
            type="password"
            placeholder="******"
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit">Register</button>
      </S.Form>
      <h3>User List</h3>
      {userList &&
        userList.map((user) => (
          <UserList
            key={user.id}
            id={user.id}
            age={user.age}
            email={user.email}
            name={user.name}
          />
        ))}
    </div>
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
