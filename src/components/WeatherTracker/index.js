import React from 'react';
import { number, string } from 'prop-types';
import { ChangeWeatherImage } from '../../utils';

export const WeatherTracker = ({
  city,
  country,
  image,
  imgAlt,
  weatherDesc,
  weatherTemp
}) => (
  <div>
    <img
      src={ChangeWeatherImage(image)}
      alt={imgAlt}
      width="300px"
      height="auto"
    />
    <p>
      Location: {city}, {country}
    </p>
    <p>
      The weather is currently {Math.round(weatherTemp)}° with {weatherDesc}{' '}
    </p>
  </div>
);

WeatherTracker.propTypes = {
  city: string.isRequired,
  country: string.isRequired,
  image: string.isRequired,
  imgAlt: string.isRequired,
  weatherDesc: string.isRequired,
  weatherTemp: number.isRequired
};
