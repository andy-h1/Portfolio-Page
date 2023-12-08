import React from "react";
import * as S from "./styles";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Burger = ({ open, setOpen }: Props): JSX.Element => {
  const handleClickChange = (): void => {
    setOpen(!open);
  };

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === "Escape") {
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
