import React from 'react';

export const WeatherTracker = ({ details }) => (
        <div>
                <ul>
                        {details.map(data => {
                                const { weather, main, sys, name } = data;
                                console.log(data);

                                return (
                                        <li>
                                                <p>Currently the weather in {name}, {sys.country} is</p>
                                        </li>
                                );
                        })}
                </ul>
        </div>
);

