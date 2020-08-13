import React from 'react';
import * as S from './styles';
import lightCloudsDay from '../../tokens/weatherImages/lightCloudsDay.png';
import { Pills } from '../Pills';

export const ProjectList = () => (
  <S.Wrapper>
    <h2>Projects</h2>

    <S.GridWrapper>
      <S.ProjectLink to="/weather">Weather App</S.ProjectLink>

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

      <S.PageLink to="/weather">
        <S.Image src={lightCloudsDay} alt="cloudy" />
      </S.PageLink>

    </S.GridWrapper>
  </S.Wrapper>
);
