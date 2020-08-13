import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 4rem 0;
  width: 100%;
  border-top: 1px solid #e5e5e5;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  place-items: center;

  @media (min-width: 600px) {
    grid-column-gap: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: minmax(50px, auto) 1fr 1fr;
    max-width: none;
  }
`;

export const ProjectLink = styled(NavLink)`
  margin: 0;
  color: initial;
  cursor: pointer;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: bolder;
  font-size: 1.17em;
  transition: all 0.2s ease-in-out;

  :hover {
    color: #17a589;
    text-decoration: underline;
  }

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
    justify-self: start;
    align-self: start;
  }
`;

export const PageLink = styled(Link)`
  cursor: pointer;

  @media (min-width: 600px) {
    grid-area: 1 / col2-start / last-line / 2;
  }
`;

export const Image = styled.img`
  justify-self: center;
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 50%;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;
