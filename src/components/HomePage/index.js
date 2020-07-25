import React from 'react';
import profile from '../../tokens/profile.jpg';
import { ProjectList } from '../ProjectList';

export const HomePage = () => (
        <div>
                <img src={profile} alt="andy" />
                <p>
                        Hey! Welcome to my website that I've built in React. Currently I am working as tech recruiter at
                        Deliveroo but hoping to create enough React projects to make the move over to becoming a dev.
                </p>
                <p>
                        I've had a very fruitful career so far, coming from a nursing background to becoming a recruiter
                        and now looking to make my final move over to development where my interests lies. My end goal
                        is I want to build something useful for the healthcare sector but in the meantime I'm honing my
                        skills in everything front-end.
                </p>
                <ProjectList />
        </div>
);
