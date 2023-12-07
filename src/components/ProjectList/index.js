import React from 'react';
import * as S from './styles';
import lightCloudsDay from '../../tokens/weatherImages/lightCloudsDay.png';
import formImage from '../../tokens/formImage.png';
import ideaBoardImage from '../../tokens/ideaBoardImage.png';
import linegraph from '../../tokens/linegraph.png';
import { Pills } from '../Pills';

export function ProjectList() {
  return (
      <S.Wrapper>
        <S.Title>Projects</S.Title>

        <S.Link href="https://seldon.netlify.app/" target="blank">
          <S.ProjectWrapper>
            <S.ProjectTitle>Data Visualization Dashboard</S.ProjectTitle>

            <S.Text>
              This dashboard was built with React, D3 and Material UI. The line
              graph currently takes mock data which updates every 1.5 seconds
              and rerenders when the data is updated using useEffect.
            </S.Text>

            <Pills
              items={[
                'react',
                'material-ui',
                'react-hooks',
                'svg',
                'd3',
                'jest',
                'react-testing-library'
              ]}
            />

            <S.ImageWrapper>
              <S.LineGraphImage src={linegraph} alt="line graph image" />
            </S.ImageWrapper>
          </S.ProjectWrapper>
        </S.Link>

        <S.Link href="https://pandy-idea-board.netlify.app/" target="_blank">
          <S.ProjectWrapper>
            <S.ProjectTitle>ClearScore Tech Test</S.ProjectTitle>

            <S.Text>
              The idea board was built with React and Styled-components.
              LocalStorage was used for the storage of the data on the web
              browser and useContext for global state management.
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
              I built this weather app using OpenWeatherMap API to get the
              current weather data in your location. It is built with React
              using styled-components.
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
}
