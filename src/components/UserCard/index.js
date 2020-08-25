import React, { useState } from 'react';
import { number, string } from 'prop-types';
import firebase from '../../firebase';

export const UserCard = ({ age, email, id, name }) => {
  const [edit, setEdit] = useState(true);
  const [updateName, setUpdateName] = useState();

  const handleDeleteClick = () => {
    firebase.firestore().collection('users').doc(id).delete();
  };

  const handleUpdate = () => {
    firebase.firestore().collection('users').doc(id).update({
      name: updateName
    });
  };

  const handleUpdateName = (event) => {
    setUpdateName(event.target.value);
  };

  const handleEditClick = () => {
    setEdit(!edit);
  };

  return (
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Age: {age}</li>
      </ul>

      <input type="text" disabled={edit} onChange={handleUpdateName} />
      <button type="submit" onClick={handleUpdate}>
        Submit
      </button>
      <button type="button" onClick={handleEditClick}>
        Edit
      </button>
      <button type="button" onClick={handleDeleteClick}>
        x
      </button>
    </div>
  );
};

UserCard.propTypes = {
  age: number.isRequired,
  email: string.isRequired,
  id: string.isRequired,
  name: string.isRequired
};
