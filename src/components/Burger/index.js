import React from 'react';
import { bool, func } from 'prop-types';
import * as S from './styles';

export const Burger = ({ open, setOpen }) => {
  const handleClickChange = () => {
    setOpen(!open);
  };
  return (
    <S.Burger open={open} onClick={handleClickChange}>
      <S.Div open={open} />
      <S.Div open={open} />
      <S.Div open={open} />
    </S.Burger>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
};
