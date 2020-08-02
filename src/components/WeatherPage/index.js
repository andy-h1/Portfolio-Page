import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './styles';

export const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState('Croydon');
  const [country, setCountry] = useState('GB');
  const [unit, setUnit] = useState('metric');
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };
  // eslint-disable-next-line no-console
  console.log({ test: weatherData });
  // eslint-disable-next-line no-console
  console.log(unit);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${unit}&APPID=${API_KEY}`
      );
      const { weather, main, sys, name } = data;
      setWeatherData({ weather, main, sys, name });
    }

    fetchData();
  }, [API_KEY, city, country, unit]);

  return (
    <>
      {weatherData && (
        <S.Wrapper>
          <h1>Current Weather</h1>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].main}
          />
          <p>
            Location: {weatherData.name}, {weatherData.sys.country}
          </p>
          <p>
            The weather is currently {Math.round(weatherData.main.temp)}° with{' '}
            {weatherData.weather[0].description}{' '}
          </p>
          <p>Change location:</p>
          <form>
            <label htmlFor="cityInput">
              <input
                type="text"
                placeholder="Enter city"
                name="city"
                onChange={handleCityChange}
              />
            </label>
            <label htmlFor="countryInput">
              <input
                type="text"
                placeholder="Enter country"
                name="country"
                onChange={handleCountryChange}
              />
            </label>
            <label htmlFor="unitInput">
              <input
                type="radio"
                name="units"
                checked={unit === 'metric'}
                value="metric"
                onChange={handleUnitChange}
              />
              Celsius
            </label>
            <label htmlFor="unitInput">
              <input
                type="radio"
                name="units"
                checked={unit === 'imperial'}
                value="imperial"
                onChange={handleUnitChange}
              />
              Fahrenheit
            </label>
            {/* <button type="submit">Get Weather</button> */}
          </form>
        </S.Wrapper>
      )}
    </>
  );
};
