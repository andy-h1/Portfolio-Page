import React from 'react';
import * as S from './styles';
import lightCloudsDay from '../../tokens/weatherImages/lightCloudsDay.png';
import { Pills } from '../Pills';

export const ProjectList = () => (
  <S.Wrapper>
    <S.Title>Projects</S.Title>
    <S.ProjectLink to="/weather">
      <S.GridWrapper>
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
      </S.GridWrapper>
    </S.ProjectLink>
  </S.Wrapper>
);
