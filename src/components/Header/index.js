import React from 'react';
import github from '../../tokens/Icons/github.webp';
import linkedin from '../../tokens/Icons/linkedin.png';
import twitter from '../../tokens/Icons/twitter.png';
import * as S from './styles';

export const Header = () => (
        <S.Header>
                <h1>Andy Huynh</h1>
                <S.Wrapper>
                        <S.PageLink to="/">home</S.PageLink>
                        <S.PageLink to="/cv">cv</S.PageLink>
                        <S.Link href="https://github.com/andy-h1" target="_blank">
                                <img src={github} alt="github" width="32px" />
                        </S.Link>
                        <S.Link href="https://www.linkedin.com/in/andyhuynh1/" target="_blank">
                                <img src={linkedin} alt="linkedin" width="32px" />
                        </S.Link>
                        <S.Link href="https://twitter.com/andyh_1_" target="_blank">
                                <img src={twitter} alt="twitter" width="34px" />
                        </S.Link>
                </S.Wrapper>
        </S.Header>
);
