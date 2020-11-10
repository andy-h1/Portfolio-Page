import React from 'react';
import * as S from './styles';
import lightCloudsDay from '../../tokens/weatherImages/lightCloudsDay.png';
import formImage from '../../tokens/formImage.png';
import ideaBoardImage from '../../tokens/ideaBoardImage.png';
import { Pills } from '../Pills';

export const ProjectList = () => (
  <S.Wrapper>
    <S.Title>Projects</S.Title>

    <S.Link href="https://pandy-idea-board.netlify.app/" target="_blank">
      <S.ProjectWrapper>
        <S.ProjectTitle>ClearScore Tech Test</S.ProjectTitle>

        <S.Text>
          The idea board was built with React and Styled-components.
          LocalStorage was used for the storage of the data on the web browser
          and I used useContext for global state management.
        </S.Text>

        <S.PillsWrapper>
          <Pills
            items={[
              'react',
              'styled-components',
              'localStorage API',
              'react-hooks',
              'jest',
              'react-testing-library'
            ]}
          />
        </S.PillsWrapper>

        <S.ImageWrapper>
          <S.FormImage src={ideaBoardImage} alt="ideaBoard" />
        </S.ImageWrapper>
      </S.ProjectWrapper>
    </S.Link>

    <S.ProjectLink to="/Form">
      <S.ProjectWrapper>
        <S.ProjectTitle>Sign-Up Form</S.ProjectTitle>

        <S.Text>
          I built this demo sign-up form, hooking the data entries to
          Firebase&apos;s cloud-based database - Firestore. It is built with
          React, Firebase and styled-components.
        </S.Text>

        <S.PillsWrapper>
          <Pills
            items={[
              'react',
              'react-hooks',
              'styled-components',
              'jest',
              'react-testing-library'
            ]}
          />
        </S.PillsWrapper>

        <S.ImageWrapper>
          <S.FormImage src={formImage} alt="form" />
        </S.ImageWrapper>
      </S.ProjectWrapper>
    </S.ProjectLink>

    <S.ProjectLink to="/weather">
      <S.ProjectWrapper>
        <S.ProjectTitle>Weather App</S.ProjectTitle>

        <S.Text>
          I built this weather app using OpenWeatherMap API to get the current
          weather data in your location. It is built with React using
          styled-components.
        </S.Text>

        <S.PillsWrapper>
          <Pills
            items={[
              'react',
              'react-hooks',
              'styled-components',
              'jest',
              'react-testing-library'
            ]}
          />
        </S.PillsWrapper>

        <S.ImageWrapper>
          <S.Image src={lightCloudsDay} alt="cloudy" />
        </S.ImageWrapper>
      </S.ProjectWrapper>
    </S.ProjectLink>
  </S.Wrapper>
);
