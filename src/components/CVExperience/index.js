import React from 'react';
import * as S from './styles';

export const CVExperience = ({ dates, description, image, imageAlt, imageHeight, imageWidth, jobTitle, website }) => (
        <S.GridList>
                <a href={website} target="_blank" rel="noopener noreferrer">
                        <img src={image} alt={imageAlt} height={imageHeight} width={imageWidth} />
                </a>
                <S.Title>{jobTitle}</S.Title>
                <S.ItalicText>{dates}</S.ItalicText>
                {description.map(paragraph => (
                        <S.Text key={paragraph}>{paragraph}</S.Text>
                ))}
        </S.GridList>
);
