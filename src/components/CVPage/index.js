import React from 'react';
import data from './data';
import { CVExperience } from '../CVExperience';

export const CVPage = () => (
        <div>
                <ul>
                        {data.map(item => (
                                <CVExperience
                                        key={item.imageAlt}
                                        dates={item.dates}
                                        description={item.description}
                                        imageAlt={item.imageAlt}
                                        image={item.image}
                                        jobTitle={item.jobTitle}
                                        website={item.website}
                                />
                        ))}
                </ul>
        </div>
);
