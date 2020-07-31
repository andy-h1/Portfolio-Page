import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const WeatherPage = () => {
        const [weatherData, setWeatherData] = useState();
        const [city, setCity] = useState('Croydon');
        const [country, setCountry] = useState('GB');
        const handleCityChange = event => {
                setCity(event.target.value);
        };
        const handleCountryChange = event => {
                setCountry(event.target.value);
        };

        console.log({ test: weatherData });

        useEffect(() => {
                async function fetchData() {
                        // move API key to env vars
                        const { data } = await axios.get(
                                `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=7fe63c086a813a868027767b80769bcf`
                        );
                        const { weather, main, sys, name } = data;
                        setWeatherData({ weather, main, sys, name });
                }

                fetchData();
        }, [city, country]);

        return (
                <div>
                        {weatherData && (
                                <div>
                                        <h1>Current Weather</h1>
                                        <img
                                                src={`http://openweathermap.org/img/wn/${
                                                        weatherData.weather[0].icon
                                                }@2x.png`}
                                                alt={weatherData.weather[0].main}
                                        />
                                        <p>
                                                Location: {weatherData.name}, {weatherData.sys.country}
                                        </p>
                                        <p>
                                                The weather is currently {weatherData.main.temp}°C with{' '}
                                                {weatherData.weather[0].description}{' '}
                                        </p>
                                        <p>Change location:</p>
                                        <form>
                                                <input
                                                        type="text"
                                                        placeholder="Enter city"
                                                        name="city"
                                                        value={city}
                                                        onChange={handleCityChange}
                                                />
                                                <input
                                                        type="text"
                                                        placeholder="Enter country"
                                                        name="country"
                                                        value={country}
                                                        onChange={handleCountryChange}
                                                />
                                                <button type="submit">Get Weather</button>
                                        </form>
                                </div>
                        )}
                </div>
        );
};
