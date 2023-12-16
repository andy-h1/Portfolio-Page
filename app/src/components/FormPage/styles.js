import styled from "styled-components";

export const PageWrapper = styled.div`
  display: grid;
  /* grid-template-rows: repeat(4, 1fr); */
  column-gap: 1em;
  row-gap: 1em;
  padding: 0;

  @media (min-width: 597px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Title = styled.h2`
  text-align: center;

  @media (min-width: 597px) {
    grid-column: 1 / span 3;
    text-align: start;
    margin-top: 1em;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  place-items: center;
  height: 100%;

  @media (min-width: 597px) {
    grid-area: 2 / 1 / 3 / 2;
    place-items: flex-start;
  }
`;

export const Label = styled.label`
  margin: 0;
`;

export const Input = styled.input`
  box-sizing: border-box;
  padding: 0.5em;
  margin: 0.5em 0;
  border: 1px solid #d7dbdd;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
`;

export const Checkbox = styled.input`
  margin: 1em 1em 0 0;
`;

export const Button = styled.button`
  background-color: #2980b9;
  border: none;
  color: white;
  border-radius: 8px;
  margin: 1em 0;
  padding: 0.5em;
  width: 150px;
  font-family: inherit;
  font-size: inherit;
`;

export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(260px, 1fr));
  grid-row-gap: 1em;
  grid-column-gap: 1em;
  place-items: center;

  @media (min-width: 597px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-column: span 2;
    grid-row-start: 2;
    place-items: end;
  }
`;

export const ErrorMessage = styled.p`
  margin: 0;
  padding: 0;
  color: red;
  font-style: bold;
  font-size: 0.7em;
`;
