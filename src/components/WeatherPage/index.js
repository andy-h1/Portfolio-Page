import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import * as S from './styles';
import { WeatherTracker } from '../WeatherTracker';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState('Croydon');
  const [country, setCountry] = useState('GB');
  const [unit, setUnit] = useState('metric');
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState('');

  // in the future move to one function
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
    // try and fetch the data
    try {
      // if no issues then do below
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${unit}&APPID=${API_KEY}`
      );
      console.log('HELLO', data);
      const { weather, main, sys, name } = data;
      setWeatherData({ weather, main, sys, name });
      setisLoading(false);
    } catch (error) {
      // something went wrong
      setisLoading(false);
      setisError('Sorry there is a problem getting your weather');
      // console.log({ error: error.response.data.message });
    }
  }, [city, country, unit]);

  useEffect(() => {
    // only fetch data if no weatherData
    if (!weatherData) {
      fetchData();
    }
  }, [fetchData, weatherData]);

  return (
    <S.Wrapper>
      <S.Title>Current Weather</S.Title>
      {isLoading && <h3 data-testid="loading">Loading...</h3>}
      {isError && <h3 data-testid="error">{isError}</h3>}

      {!isError && weatherData && (
        <WeatherTracker
          country={weatherData.sys.country}
          image={weatherData.weather[0].icon}
          weatherDesc={weatherData.weather[0].description}
          imgAlt={weatherData.weather[0].main}
          city={weatherData.name}
          weatherTemp={weatherData.main.temp}
        />
      )}
      <p>Change location:</p>
      <S.Form>
        <S.Label htmlFor="cityInput">
          <S.Input
            type="text"
            placeholder="Enter city"
            name="city"
            onChange={handleCityChange}
          />
        </S.Label>
        <S.Label htmlFor="countryInput">
          <S.Input
            type="text"
            placeholder="Enter country"
            name="country"
            onChange={handleCountryChange}
          />
        </S.Label>
        <S.Label htmlFor="unitInput">
          <input
            type="radio"
            name="units"
            checked={unit === 'metric'}
            value="metric"
            onChange={handleUnitChange}
          />
          Celsius
        </S.Label>
        <S.Label htmlFor="unitInput">
          <input
            type="radio"
            name="units"
            checked={unit === 'imperial'}
            value="imperial"
            onChange={handleUnitChange}
          />
          Fahrenheit
        </S.Label>
        <S.Button type="button" onClick={fetchData}>
          Get Weather
        </S.Button>
      </S.Form>
    </S.Wrapper>
  );
};
