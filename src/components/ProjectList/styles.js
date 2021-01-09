import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 4rem 0;
  width: 100%;
  border-top: 1px solid #e5e5e5;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const Title = styled.h2`
  @media (min-width: 597px) {
    margin: 1rem;
  }
`;

export const Link = styled.a`
  margin: 0 1em 0 0;
  color: initial;
  cursor: pointer;
  text-decoration: none;
`;

export const ProjectLink = styled(NavLink)`
  margin: 0 1em 0 0;
  color: initial;
  cursor: pointer;
  text-decoration: none;
`;

export const ProjectWrapper = styled.div`
  display: grid;
  place-items: center;
  padding: 1rem;
  transition: all 0.2s ease-in-out;
  border-bottom: 1px solid #e5e5e5;

  :hover {
    background: #f9f9f9;
    border: 1px solid #c9c9c9;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
  }

  @media (max-width: 597px) {
    background: #f9f9f9;
    border: 1px solid #c9c9c9;
    padding: 1rem;
    border-radius: 8px;
  }

  @media (min-width: 597px) {
    grid-column-gap: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: minmax(50px, auto) 1fr 1fr;
    max-width: none;
  }
`;

export const ProjectTitle = styled.h3`
  @media (min-width: 600px) {
    justify-self: start;
  }
`;

export const Text = styled.p`
  @media (min-width: 600px) {
    grid-row-start: 2;
  }
`;

export const PillsWrapper = styled.div`
  @media (min-width: 600px) {
    grid-row-start: 3;
    justify-content: start;
    align-self: start;
  }
`;

export const ImageWrapper = styled.span`
  @media (min-width: 600px) {
    grid-area: 1 / col2-start / last-line / 2;
  }
`;

export const Image = styled.img`
  justify-self: center;
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 50%;
`;

export const FormImage = styled.img`
  height: 250px;
  width: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const LineGraphImage = styled.img`
  height: 150px;
  width: 300px;
`;
