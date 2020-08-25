import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

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
  padding: 10px;
  margin: 10px 0;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #2980b9;
  border: none;
  color: white;
  border-radius: 8px;
  padding: 0.5rem 0;
  max-width: 300px;
`;
