import React from 'react';
import { bool } from 'prop-types';
import github from '../../tokens/Icons/github.webp';
import linkedin from '../../tokens/Icons/linkedin.png';
import twitter from '../../tokens/Icons/twitter.png';
import * as S from './styles';

export const Header = ({ open }) => {
  return (
    <S.Header>
      <h1>Andy Huynh</h1>
      <S.Wrapper open={open}>
        <S.PageLink to="/">home</S.PageLink>
        <S.PageLink to="/cv">cv</S.PageLink>
        <S.Link href="https://github.com/andy-h1" target="_blank">
          <S.Image src={github} alt="github" />
        </S.Link>
        <S.Link href="https://www.linkedin.com/in/andyhuynh1/" target="_blank">
          <S.Image src={linkedin} alt="linkedin" />
        </S.Link>
        <S.Link href="https://twitter.com/andyh_1_" target="_blank">
          <S.Image src={twitter} alt="twitter" />
        </S.Link>
      </S.Wrapper>
    </S.Header>
  );
};

Header.propTypes = {
  open: bool.isRequired
};
