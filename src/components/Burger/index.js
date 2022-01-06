import React from 'react';
import { bool, func } from 'prop-types';
import * as S from './styles';

export const Burger = ({ open, setOpen }) => {
  const handleClickChange = () => {
    setOpen(!open);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      handleClickChange();
    }
  };
  return (
    <S.Burger open={open} onClick={handleClickChange} onKeyDown={handleKeyDown}>
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
