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

  @media (max-width: 597px) {
    width: 100%;
    flex-direction: column;
    height: 100vh;
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    background: #5dade2;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
  }
`;

export const PageLink = styled(NavLink)`
  color: initial;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0 0 0 1rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 597px) {
    font-size: 1.5rem;
    padding: 2rem 2rem;
    border-top: 1px solid black;
  }
`;

export const Link = styled.a`
  cursor: pointer;
  margin: 0 0 0 1rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 597px) {
    padding: 2rem;
    border-top: 1px solid black;
  }
`;

export const Image = styled.img`
  height: 32px;
  width: auto;
`;
