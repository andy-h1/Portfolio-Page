import styled from 'styled-components';

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
  width: 300px;
  font-family: inherit;
  font-size: inherit;
`;

export const Button = styled.button`
  background-color: #2980b9;
  border: none;
  color: white;
  border-radius: 8px;
  padding: 0.5rem 0;
  max-width: 300px;
  font-family: inherit;
  font-size: inherit;
`;
