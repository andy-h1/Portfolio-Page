import React from 'react';
import { number, string } from 'prop-types';
import { getWeatherImage, dateConverter, timeConverter } from '../../utils';
import * as S from './styles';

export const WeatherTracker = ({
  city,
  country,
  image,
  imgAlt,
  timeStamp,
  weatherDesc,
  weatherTemp,
  weatherTempFeelsLike,
  width,
  wind
}) => {
  return (
    <S.Wrapper data-testid="weatherTracker">
      <S.Image
        src={getWeatherImage(image)}
        alt={imgAlt}
        width={width}
        height="auto"
      />

      <S.Table>
        <tbody>
          <tr>
            <S.Header>Current Date:</S.Header>
            <S.Data>{dateConverter(timeStamp)}</S.Data>
          </tr>
          <tr>
            <S.Header>Time of Weather:</S.Header>
            <S.Data>{timeConverter(timeStamp)}</S.Data>
          </tr>
          <tr>
            <S.Header>Location:</S.Header>
            <S.Data>
              {city}, {country}
            </S.Data>
          </tr>
          <tr>
            <S.Header>Current Temperature:</S.Header>
            <S.Data>{Math.round(weatherTemp)}°</S.Data>
          </tr>
          <tr>
            <S.Header>Feels like:</S.Header>
            <S.Data>{Math.round(weatherTempFeelsLike)}°</S.Data>
          </tr>
          <tr>
            <S.Header>Forecast:</S.Header>
            <S.Data>{weatherDesc}</S.Data>
          </tr>
          <tr>
            <S.Header>Wind speed:</S.Header>
            <S.Data>{wind}</S.Data>
          </tr>
        </tbody>
      </S.Table>
    </S.Wrapper>
  );
};

WeatherTracker.propTypes = {
  city: string.isRequired,
  country: string.isRequired,
  image: string.isRequired,
  imgAlt: string.isRequired,
  timeStamp: number.isRequired,
  weatherDesc: string.isRequired,
  weatherTemp: number.isRequired,
  weatherTempFeelsLike: number.isRequired,
  wind: number.isRequired,
  width: string
};

WeatherTracker.defaultProps = {
  width: '250px'
};
