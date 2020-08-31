import React from 'react';
import * as S from './styles';
import lightCloudsDay from '../../tokens/weatherImages/lightCloudsDay.png';
import formImage from '../../tokens/formImage.png';
import { Pills } from '../Pills';

export const ProjectList = () => (
  <S.Wrapper>
    <S.Title>Projects</S.Title>
    <S.ProjectLink to="/weather">
      <S.ProjectWrapper>
        <S.ProjectTitle>Weather App</S.ProjectTitle>

        <S.Text>
          I built this weather app using OpenWeatherMap API to get the current
          weather data in your location. It has been built with React using
          styled-components.
        </S.Text>

        <S.PillsWrapper>
          <Pills
            items={[
              'react',
              'styled-components',
              'jest',
              'react-testing-library'
            ]}
          />
        </S.PillsWrapper>

        <S.ImageWrapper>
          <S.Image src={lightCloudsDay} alt="cloudy" />
        </S.ImageWrapper>
      </S.ProjectWrapper>
    </S.ProjectLink>

    <S.ProjectLink to="/Form">
      <S.ProjectWrapper>
        <S.ProjectTitle>Sign-Up Form</S.ProjectTitle>

        <S.Text>
          I built this demo sign-up form, hooking the data entries to
          Firebase&apos;s cloud-based database - Firestore. It has been built
          with React, Firebase and styled-components.
        </S.Text>

        <S.PillsWrapper>
          <Pills
            items={[
              'react',
              'styled-components',
              'jest',
              'react-testing-library'
            ]}
          />
        </S.PillsWrapper>

        <S.ImageWrapper>
          <S.FormImage src={formImage} alt="form" />
        </S.ImageWrapper>
      </S.ProjectWrapper>
    </S.ProjectLink>
  </S.Wrapper>
);
