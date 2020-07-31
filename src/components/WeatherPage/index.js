import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const WeatherPage = () => {
        const [weatherData, setWeatherData] = useState();

        console.log({ test: weatherData });
        useEffect(() => {
                async function fetchData() {
                        // move API key to env vars
                        const { data } = await axios.get(
                                'https://api.openweathermap.org/data/2.5/weather?q=Croydon,uk&units=metric&APPID=7fe63c086a813a868027767b80769bcf'
                        );
                        const { weather, main, sys, name } = data;
                        setWeatherData({ weather, main, sys, name });
                }

                fetchData();
        }, []);

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
                                                The weather is currently {weatherData.main.temp} with{' '}
                                                {weatherData.weather[0].description}{' '}
                                        </p>
                                </div>
                        )}
                </div>
        );
};

// What do I want to do next with this Weather Page

// Display visual representation of the weather
// - use weather.icon to display visuals

// Add input form to change location of the weather data
