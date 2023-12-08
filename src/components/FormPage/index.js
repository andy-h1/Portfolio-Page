import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import { UserCard } from "../UserCard";
import { useForm } from "../UseForm";
import { validateInput } from "../../utils";
import * as S from "./styles";

const initialValues = {
  username: "",
  password: "",
  email: "",
  age: 0,
};

const addUserData = (values, setValues) => {
  firebase
    .firestore()
    .collection("users")
    .add({
      values,
    })
    .then(() => {
      setValues(initialValues);
    });
};

export function FormPage() {
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    values,
    errors,
  } = useForm(addUserData, validateInput, initialValues);
  const [showPassword, setShowPassword] = useState(false);
  const [userList, setUserList] = useState([]);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("users")
      .onSnapshot((snapshot) => {
        const newUserList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setUserList(newUserList);
      });

    return () => unsubscribe();
  }, []);

  return (
    <S.PageWrapper>
      <S.Title>Sign Up Form</S.Title>
      <S.Form onSubmit={handleSubmit} noValidate>
        <S.Label htmlFor="username">
          <S.Input
            id="username"
            value={values.username}
            name="username"
            type="text"
            placeholder="Username"
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
        </S.Label>
        {errors.username && <S.ErrorMessage>{errors.username}</S.ErrorMessage>}

        <S.Label htmlFor="email">
          <S.Input
            id="email"
            name="email"
            value={values.email}
            type="email"
            placeholder="Email"
            onBlur={handleBlur}
            onChange={handleChange}
            required
          />
        </S.Label>
        {errors.email && <S.ErrorMessage>{errors.email}</S.ErrorMessage>}

        <S.Label htmlFor="age">
          <S.Input
            id="age"
            name="age"
            value={values.age}
            type="number"
            placeholder="Age"
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </S.Label>
        {errors.age && <S.ErrorMessage>{errors.age}</S.ErrorMessage>}

        <S.PasswordWrapper>
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
        {errors.password && <S.ErrorMessage>{errors.password}</S.ErrorMessage>}
        <S.Button type="submit" disabled={isSubmitting}>
          Register
        </S.Button>
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
}
