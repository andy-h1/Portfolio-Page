import React from 'react';

export const CVExperience = ({ dates, description, image, imageAlt, jobTitle, website }) => (
        <li>
                <a href={website} target="_blank" rel="noopener noreferrer">
                        <img src={image} alt={imageAlt} width="auto" height="60px" />
                </a>
                <h3>{jobTitle}</h3>
                <h3>{dates}</h3>
                {description.map(paragraph => (
                        <p key={paragraph}>{paragraph}</p>
                ))}
        </li>
);
