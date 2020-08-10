import React from 'react';
import profile from '../../tokens/profile.jpg';
import { ProjectList } from '../ProjectList';
import { WeatherTracker } from '../WeatherTracker';
import * as S from './styles';

export const HomePage = () => (
  <S.FlexWrapper>
    <S.GridWrapper>
      <S.Image src={profile} alt="andy" />
      <S.Text>
        Hey! Welcome to my website that I&apos;ve built in React. Currently I am
        working as a tech recruiter at Deliveroo but hoping to create enough
        React projects to make the move over to becoming a dev.
      </S.Text>
      <S.Text>
        I&apos;ve had a very fruitful career so far, coming from a nursing
        background to becoming a recruiter and now looking to make my final move
        over to development where my interests lies. My end goal is to build
        something useful for the healthcare sector but in the meantime I&apos;m
        honing my skills in everything front-end.
      </S.Text>
    </S.GridWrapper>

    <ProjectList />

    <WeatherTracker
      country="united kingdom"
      image="13d"
      weatherDesc="facking hot"
      imgAlt="sunshine"
      city="london"
      weatherTemp={34}
    />
  </S.FlexWrapper>
);
