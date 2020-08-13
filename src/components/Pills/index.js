import React from 'react';
import { arrayOf, string } from 'prop-types';
import * as S from './styles';

export const Pills = ({ items }) => (
  <S.List>
    {items.map((item) => (
      <S.Pill key={item}>{item}</S.Pill>
    ))}
  </S.List>
);

Pills.propTypes = {
  items: arrayOf(string).isRequired
};
