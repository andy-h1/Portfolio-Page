import React from 'react';
import * as S from './styles';

interface Props {
  open: Boolean;
  setOpen: Function;
}

export const Burger = ({ open, setOpen } : Props) => {
  const handleClickChange = () => {
    setOpen(!open);
  };

  const handleKeyDown = (event : KeyboardEvent) => {
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
