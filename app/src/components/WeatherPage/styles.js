import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  font-size: inherit;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h2`
  margin: 0 0 1rem 0;
  text-align: center;

  @media (min-width: 597px) {
    text-align: start;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.label`
  margin: 0;
  width: 250px;
`;

export const UnitLabel = styled.label`
  display: inline-flex;
  flex-direction: row;
  margin: 10px 0;
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
  text-transform: capitalize;
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
