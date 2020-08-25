import styled from 'styled-components';
import passwordIcon from '../../tokens/Icons/passwordIcon.svg';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 597px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  padding: 10px;
  margin: 10px 0;
  border: 0;
  border-bottom: 1px solid #eee;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
`;

export const Button = styled.button`
  background-color: #2980b9;
  border: none;
  color: white;
  border-radius: 8px;
  padding: 0.5rem 0;
  max-width: 50%;
  font-family: inherit;
  font-size: inherit;
`;

export const PasswordWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const ShowPasswordButton = styled.button`
  position: absolute;
  top: 25%;
  right: 3%;
  cursor: pointer;
  height: 32px;
  width: 32px;
  object-fit: contain;
  border: none;
  background-image: url(${passwordIcon});
  background-color: white;
  z-index: 2;
`;
