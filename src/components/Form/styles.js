import styled from 'styled-components';
import passwordIcon from '../../tokens/Icons/passwordIcon.svg';

export const PageWrapper = styled.div`
  padding: 0;
  margin-left: 1em;
`;

export const Title = styled.h2`
  text-align: center;

  @media (min-width: 597px) {
    text-align: start;
    margin-top: 1em;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  place-items: center;

  @media (min-width: 597px) {
    place-items: flex-start;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  padding: 10px;
  margin: 10px 0;
  border: 0;
  border-bottom: 1px solid #eee;
  width: 250px;
  font-family: inherit;
  font-size: inherit;
`;

export const Button = styled.button`
  background-color: #2980b9;
  border: none;
  color: white;
  border-radius: 8px;
  margin: 10px 0;
  padding: 0.5rem 0;
  width: 250px;
  font-family: inherit;
  font-size: inherit;
`;

export const PasswordWrapper = styled.div`
  display: flex;
  position: relative;
  z-index: 0;
`;

export const UserCardWrapper = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-row-gap: 1em;

  /* @media (min-width: 597px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  } */
`;

export const ShowPasswordButton = styled.button`
  background-image: url(${passwordIcon});
  background-color: white;
  border: none;
  position: absolute;
  top: 25%;
  right: 5%;
  cursor: pointer;
  height: 32px;
  width: 32px;
  object-fit: contain;
`;
