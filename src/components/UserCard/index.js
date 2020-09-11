import React, { useState } from 'react';
import { string } from 'prop-types';
import firebase from '../../firebase';
import * as S from './styles';
// import { useForm } from '../UseForm';
// import { validateInput } from '../../utils';

export const UserCard = ({ age, email, id, name }) => {
  const [edit, setEdit] = useState(false);
  const [updateName, setUpdateName] = useState();
  const [updateEmail, setUpdateEmail] = useState();
  const [updateAge, setUpdateAge] = useState();

  const handleDeleteClick = () => {
    firebase.firestore().collection('users').doc(id).delete();
  };

  const updateData = (event) => {
    event.preventDefault();
    firebase
      .firestore()
      .collection('users')
      .doc(id)
      .update({
        name: updateName,
        email: updateEmail,
        age: updateAge
      })
      .then(() => {
        setEdit(false);
      });
  };

  const handleUpdateName = (event) => {
    setUpdateName(event.target.value);
  };

  const handleUpdateEmail = (event) => {
    setUpdateEmail(event.target.value);
  };

  const handleUpdateAge = (event) => {
    setUpdateAge(event.target.value);
  };

  const handleEditClick = () => {
    setEdit(!edit);
  };

  return (
    <S.UserCardWrapper>
      {edit ? (
        <form onSubmit={updateData}>
          <S.Label htmlFor="usernameInput">
            Username:
            <S.Input
              type="text"
              value={updateName}
              placeholder="Username"
              onChange={handleUpdateName}
            />
          </S.Label>
          <S.Label htmlFor="emailInput">
            Email:
            <S.Input
              type="email"
              value={updateEmail}
              placeholder="Email"
              onChange={handleUpdateEmail}
            />
          </S.Label>
          <S.Label htmlFor="ageInput">
            Age:
            <S.Input
              type="age"
              value={updateAge}
              placeholder="Age"
              onChange={handleUpdateAge}
            />
          </S.Label>
          <S.Button type="submit">Save</S.Button>
        </form>
      ) : (
        <div>
          <S.Table>
            <tbody>
              <tr>
                <S.Header>Username:</S.Header>
                <S.Data>{name}</S.Data>
              </tr>
              <tr>
                <S.Header>Email:</S.Header>
                <S.Data>{email}</S.Data>
              </tr>
              <tr>
                <S.Header>Age:</S.Header>
                <S.Data>{age}</S.Data>
              </tr>
            </tbody>
          </S.Table>
          <S.ButtonWrapper>
            <S.Button type="button" onClick={handleEditClick}>
              Edit
            </S.Button>
            <S.Button type="button" onClick={handleDeleteClick}>
              Delete
            </S.Button>
          </S.ButtonWrapper>
        </div>
      )}
    </S.UserCardWrapper>
  );
};

UserCard.propTypes = {
  age: string.isRequired,
  email: string.isRequired,
  id: string.isRequired,
  name: string.isRequired
};

// onClick toggle edit state
// show input field otherwise return user card
