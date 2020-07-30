import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const WeatherPage = () => {
        const [weatherData, setWeatherData] = useState();

        console.log({ test: weatherData?.name });

        useEffect(() => {
                async function fetchData() {
                        // move API key to env vars
                        const { data } = await axios.get(
                                'https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=7fe63c086a813a868027767b80769bcf'
                        );

                        const { weather, main, sys, name } = data;

                        setWeatherData({ weather, main, sys, name });
                }

                fetchData();
        }, []);

        // what parts of the data do you actually need?

        return (
                <div>
                        <p>Weather!!!</p>
                        {weatherData && (
                                <div>
                                        <h1>Currently in {weatherData.name}</h1>
                                        <p>
                                                The weather is currently {weatherData.main.temp} with{' '}
                                                {weatherData.weather[0].description}{' '}
                                        </p>
                                </div>
                        )}

                        {/* {weatherData && <WeatherTracker details={Object.entries(weatherData)} />} */}
                </div>
        );
};
// How to build a Weather App
// It should display - current location, current temperature, weather condition, humidity
// How do I find my current location?
//
