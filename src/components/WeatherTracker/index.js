import React from 'react';
import { number, string } from 'prop-types';
import { getWeatherImage } from '../../utils';
import * as S from './styles';

export const WeatherTracker = ({
  city,
  country,
  image,
  imgAlt,
  weatherDesc,
  weatherTemp,
  width
}) => (
  <S.Wrapper data-testid="weatherTracker">
    <img
      src={getWeatherImage(image)}
      alt={imgAlt}
      width={width}
      height="auto"
    />
    <p>
      Location: {city}, {country}
    </p>
    <p>
      The weather is currently {Math.round(weatherTemp)}° with {weatherDesc}{' '}
    </p>
  </S.Wrapper>
);

WeatherTracker.propTypes = {
  city: string.isRequired,
  country: string.isRequired,
  image: string.isRequired,
  imgAlt: string.isRequired,
  weatherDesc: string.isRequired,
  weatherTemp: number.isRequired,
  width: string
};

WeatherTracker.defaultProps = {
  width: '300px'
};
