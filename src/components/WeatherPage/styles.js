import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;

  @media (max-width: 600px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h2`
  justify-content: start;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.label`
  margin: 10px 0;
  width: 100%;
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
  margin: 10px 0;
  padding: 10px;
  max-width: 300px;
  font-family: inherit;
  font-size: inherit;
`;
