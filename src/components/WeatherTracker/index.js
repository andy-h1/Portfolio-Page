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
            <S.Header>Current Date:</S.Header>{' '}
            <td>{dateConverter(timeStamp)}</td>
          </tr>
          <tr>
            <S.Header>Time of Weather:</S.Header>
            <td>{timeConverter(timeStamp)}</td>
          </tr>
          <tr>
            <S.Header>Location:</S.Header>{' '}
            <td>
              {city}, {country}
            </td>
          </tr>
          <tr>
            <S.Header>Current Temperature:</S.Header>{' '}
            <td>{Math.round(weatherTemp)}°</td>
          </tr>
          <tr>
            <S.Header>Feels like:</S.Header>
            <td>{Math.round(weatherTempFeelsLike)}°</td>
          </tr>
          <tr>
            <S.Header>Forecast:</S.Header> <td>{weatherDesc}</td>
          </tr>
          <tr>
            <S.Header>Wind speed:</S.Header> <td>{wind}</td>
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
