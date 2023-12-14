import { arrayOf, string } from "prop-types";
import * as S from "./styles";

export function CVExperience({
  dates,
  description,
  image,
  imageAlt,
  imageHeight,
  imageWidth,
  jobTitle,
  website,
}) {
  return (
    <S.GridItem>
      <a href={website} target="_blank" rel="noopener noreferrer">
        <img
          src={image}
          alt={imageAlt}
          height={imageHeight}
          width={imageWidth}
        />
      </a>
      <S.Title>{jobTitle}</S.Title>
      <S.ItalicText>{dates}</S.ItalicText>
      {description.map((paragraph) => (
        <S.Text key={paragraph}>{paragraph}</S.Text>
      ))}
    </S.GridItem>
  );
}

CVExperience.propTypes = {
  dates: string.isRequired,
  description: arrayOf(string).isRequired,
  image: string.isRequired,
  imageAlt: string.isRequired,
  imageHeight: string.isRequired,
  imageWidth: string.isRequired,
  jobTitle: string.isRequired,
  website: string.isRequired,
};
