import React from 'react';
import { number, string } from 'prop-types';

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
      src={`http://openweathermap.org/img/wn/${image}@2x.png`}
      alt={imgAlt}
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
