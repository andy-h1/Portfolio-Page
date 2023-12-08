import React, { useState } from "react";
import { number, string } from "prop-types";
import firebase from "../../firebase";
import * as S from "./styles";
import { useForm } from "../UseForm";
import { validateInput } from "../../utils";

const initialValues = {
  username: "",
  password: "",
  email: "",
  age: 0,
};

export function UserCard({ age, email, id, name }) {
  const [edit, setEdit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const updateData = (values, setValues) => {
    firebase
      .firestore()
      .collection("users")
      .doc(id)
      .update({
        values,
      })
      .then(() => {
        setEdit(false);
        setValues(initialValues);
      })
      .catch((error) => console.log({ error }));
  };

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    values,
    errors,
  } = useForm(updateData, validateInput, initialValues);

  const handleDeleteClick = () => {
    firebase.firestore().collection("users").doc(id).delete();
  };

  const handleEditClick = () => {
    setEdit(!edit);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.UserCardWrapper>
      {edit ? (
        <S.Form onSubmit={handleSubmit}>
          <S.Label htmlFor="usernameInput">
            <S.Input
              type="string"
              value={values.username}
              placeholder="Username"
              onBlur={handleBlur}
              onChange={handleChange}
              name="username"
              required
            />
          </S.Label>
          {errors.username && (
            <S.ErrorMessage>{errors.username}</S.ErrorMessage>
          )}

          <S.Label htmlFor="emailInput">
            <S.Input
              type="string"
              value={values.email}
              placeholder="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              name="email"
              required
            />
          </S.Label>
          {errors.email && <S.ErrorMessage>{errors.email}</S.ErrorMessage>}

          <S.Label htmlFor="ageInput">
            <S.Input
              type="number"
              value={values.age}
              placeholder="Age"
              name="age"
              onChange={handleChange}
            />
          </S.Label>
          {errors.age && <S.ErrorMessage>{errors.age}</S.ErrorMessage>}

          <S.Label htmlFor="password">
            <S.Input
              id="password"
              name="password"
              value={values.password}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onBlur={handleBlur}
              onChange={handleChange}
              required
            />
          </S.Label>

          <S.PasswordWrapper>
            <S.Label htmlFor="showPasswordInput">
              <S.Checkbox
                type="checkbox"
                id="showPassword"
                name="showPassword"
                onClick={togglePassword}
              />
              Show password
            </S.Label>
          </S.PasswordWrapper>
          {errors.password && (
            <S.ErrorMessage>{errors.password}</S.ErrorMessage>
          )}
          <S.ButtonWrapper>
            <S.Button type="button" onClick={handleEditClick}>
              Back
            </S.Button>

            <S.Button type="submit" disabled={isSubmitting}>
              Save
            </S.Button>
          </S.ButtonWrapper>
        </S.Form>
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
}

UserCard.propTypes = {
  age: number.isRequired,
  email: string.isRequired,
  id: string.isRequired,
  name: string.isRequired,
};
