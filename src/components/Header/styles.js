import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 3rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageLink = styled(NavLink)`
  color: initial;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0 0 0 1rem;
`;

export const Link = styled.a`
  cursor: pointer;
  margin: 0 0 0 1rem;
  height: 32px;
  width: 32px;
`;
