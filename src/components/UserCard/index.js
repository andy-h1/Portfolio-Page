import React, { useState } from 'react';
import { number, string } from 'prop-types';
import firebase from '../../firebase';
import * as S from './styles';

export const UserCard = ({ age, email, id, name }) => {
  const [edit, setEdit] = useState(false);
  const [updateName, setUpdateName] = useState();
  const [updateEmail, setUpdateEmail] = useState();
  const [updateAge, setUpdateAge] = useState();

  const handleDeleteClick = () => {
    firebase.firestore().collection('users').doc(id).delete();
  };

  const handleUpdate = () => {
    firebase.firestore().collection('users').doc(id).update({
      name: updateName,
      email: updateEmail,
      age: updateAge
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
        <div>
          <S.Input
            type="text"
            placeholder="Username"
            onChange={handleUpdateName}
          />
          <S.Input type="text" placeholder="Email" onChange={handleUpdateAge} />
          <S.Input type="text" placeholder="Age" onChange={handleUpdateEmail} />
        </div>
      ) : (
        <S.List>
          <li>Name: {name}</li>
          <li>Email: {email}</li>
          <li>Age: {age}</li>
        </S.List>
      )}
      <S.ButtonWrapper>
        <S.Button type="submit" onClick={handleUpdate}>
          Submit
        </S.Button>
        <S.Button type="button" onClick={handleEditClick}>
          Edit
        </S.Button>
        <S.Button type="button" onClick={handleDeleteClick}>
          X
        </S.Button>
      </S.ButtonWrapper>
    </S.UserCardWrapper>
  );
};

UserCard.propTypes = {
  age: number.isRequired,
  email: string.isRequired,
  id: string.isRequired,
  name: string.isRequired
};

// onClick toggle edit state
// show input field otherwise return user card
