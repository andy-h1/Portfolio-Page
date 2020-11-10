import React from 'react';
import profile from '../../tokens/profile.jpg';
import { ProjectList } from '../ProjectList';
import CV from '../../tokens/Andy-Huynh-CV.pdf';
import * as S from './styles';

export const HomePage = () => (
  <S.FlexWrapper>
    <S.GridWrapper>
      <S.Image src={profile} alt="andy" />

      <a href={CV} download="Andy Huynh CV">
        <S.Button type="button">Download CV</S.Button>
      </a>

      <S.Text>
        I am a Front End Developer that loves JS, User Experience, and
        animations. I am currently looking into TypeScript, GraphQL, Cypress.
      </S.Text>

      <S.Text>
        I am currently learning new technologies and will be using this website
        as a playground to demonstrate what I&apos;ve learnt so far.
      </S.Text>
    </S.GridWrapper>

    <ProjectList />
  </S.FlexWrapper>
);
