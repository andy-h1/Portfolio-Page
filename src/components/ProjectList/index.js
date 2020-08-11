import React from 'react';
import * as S from './styles';
import { WeatherTracker } from '../WeatherTracker';

export const ProjectList = () => (
  <S.Wrapper>
    <h2>Project List</h2>
    <WeatherTracker
      country="United Kingdom"
      image="01d"
      weatherDesc="sunny"
      imgAlt="sunshine"
      city="London"
      weatherTemp={34}
    />
  </S.Wrapper>
);
