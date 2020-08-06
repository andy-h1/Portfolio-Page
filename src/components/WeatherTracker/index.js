import React from 'react';

export const WeatherTracker = ({ details }) => {
  // eslint-disable-next-line no-console
  const { weather, name, sys, main } = details;
  return (
    <div>
      {console.log({ details })}
      <img
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].main}
      />
      <p>
        Location: {name}, {sys.country}
      </p>
      <p>
        The weather is currently {Math.round(main.temp)}° with{' '}
        {weather[0].description}{' '}
      </p>
    </div>
  );
};
