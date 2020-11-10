import React from 'react';
import data from './data';
import { CVExperience } from '../CVExperience';
import CV from '../../tokens/Andy-Huynh-CV.pdf';
import * as S from './styles';

export const CVPage = () => (
  <S.PageWrapper>
    <a href={CV} download="Andy Huynh CV">
      <S.Button type="button">Download CV</S.Button>
    </a>

    <S.List>
      {data.map((item) => (
        <CVExperience
          key={item.imageAlt}
          dates={item.dates}
          description={item.description}
          imageAlt={item.imageAlt}
          image={item.image}
          imageHeight={item.imageHeight}
          imageWidth={item.imageWidth}
          jobTitle={item.jobTitle}
          website={item.website}
        />
      ))}
    </S.List>
  </S.PageWrapper>
);
