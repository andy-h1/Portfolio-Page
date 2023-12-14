import profile from "../../tokens/profile.jpg";
import { ProjectList } from "../ProjectList";
import CV from "../../tokens/Andy-Huynh-CV.pdf";
import * as S from "./styles";

export function HomePage() {
  return (
    <S.FlexWrapper>
      <S.GridWrapper>
        <S.Image src={profile} alt="andy" />

        <a href={CV} download="Andy Huynh CV">
          <S.Button type="button">Download CV</S.Button>
        </a>

        <S.Text>
          I am a Front End Developer that loves JS, User Experience, and
          animations. Below are some projects I&apos;ve recently built, I&apos;m
          currently working on a new app as an excuse to get stronger with
          TypeScript, Cypress and Redux
        </S.Text>

        <S.Text>
          My website is used as a playground for me to test out new and exciting
          technologies.
        </S.Text>
      </S.GridWrapper>

      <ProjectList />
    </S.FlexWrapper>
  );
}
