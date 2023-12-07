import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import * as S from './styles';
import { WeatherTracker } from '../WeatherTracker';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export function WeatherPage() {
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState('Croydon');
  const [country, setCountry] = useState('GB');
  const [unit, setUnit] = useState('metric');
  const [isLoading, setisLoading] = useState(true);
  const [errors, setErrors] = useState('');

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

  const clearState = () => {
    setErrors('');
    setCity('');
    setCountry('');
    setUnit('metric');
  };

  const fetchData = useCallback(async () => {
    // try and fetch the data
    try {
      // if no issues then do below
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${unit}&APPID=${API_KEY}`
      );
      const { weather, main, sys, name, wind, dt } = data;
      setWeatherData({ weather, main, sys, name, wind, dt });
      setisLoading(false);
      clearState();
    } catch (error) {
      // something went wrong
      setisLoading(false);
      setErrors('Sorry there is a problem getting your weather');
    }
  }, [city, country, unit]);

  useEffect(() => {
    // only fetch data if no weatherData
    if (!weatherData) {
      fetchData();
    }
  }, [fetchData, weatherData]);

  return (
    <>
      <S.Title>Weather Page</S.Title>

      <S.Wrapper>
        {isLoading && <h3 data-testid="loading">Loading...</h3>}
        {errors && <h3 data-testid="error">{errors}</h3>}

        {!errors && weatherData && (
          <WeatherTracker
            city={weatherData.name}
            country={weatherData.sys.country}
            image={weatherData.weather[0].icon}
            imgAlt={weatherData.weather[0].main}
            timeStamp={weatherData.dt}
            weatherDesc={weatherData.weather[0].description}
            weatherTemp={weatherData.main.temp}
            weatherTempFeelsLike={weatherData.main.feels_like}
            wind={weatherData.wind.speed}
            unit={unit}
          />
        )}
        <S.Form>
          <S.Label htmlFor="cityInput">
            <S.Input
              id="cityInput"
              type="text"
              placeholder="Enter city"
              name="city"
              value={city}
              onChange={handleCityChange}
            />
          </S.Label>
          <S.Label htmlFor="countryInput">
            <S.Input
              id="countryInput"
              type="text"
              placeholder="Enter country"
              name="country"
              value={country}
              onChange={handleCountryChange}
            />
          </S.Label>
          <S.UnitLabel htmlFor="unitInput">
            <input
              id="unitInput"
              type="radio"
              name="units"
              checked={unit === 'metric'}
              value="metric"
              onChange={handleUnitChange}
            />
            Celsius
          </S.UnitLabel>
          <S.UnitLabel htmlFor="unitInput">
            <input
              id="unitInput"
              type="radio"
              name="units"
              checked={unit === 'imperial'}
              value="imperial"
              onChange={handleUnitChange}
            />
            Fahrenheit
          </S.UnitLabel>
          <S.Button type="button" onClick={fetchData}>
            Get Weather
          </S.Button>
        </S.Form>
      </S.Wrapper>
    </>
  );
}
