import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import * as S from './styles';
import { WeatherTracker } from '../WeatherTracker';

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

  const fetchData = useCallback(async () => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${unit}&APPID=${API_KEY}`
    );
    const { weather, main, sys, name } = data;
    setWeatherData({ weather, main, sys, name });
  },[API_KEY, city, country, unit]);

  useEffect(() => {
    // only fetch data if no weatherData
    if (!weatherData) {
      fetchData();
    }
  }, [fetchData, weatherData]);

  return (
    <>
      <S.Title>Current Weather</S.Title>
      {weatherData && (
        <WeatherTracker
          country={weatherData.sys.country}
          image={weatherData.weather[0].icon}
          weatherDesc={weatherData.weather[0].description}
          imgAlt={weatherData.weather[0].main}
          city={weatherData.name}
          weatherTemp={weatherData.main.temp}
        />
      )}
      <S.Wrapper>
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
          <button type="button" onClick={fetchData}>
            Get Weather
          </button>
        </form>
      </S.Wrapper>
    </>
  );
};
