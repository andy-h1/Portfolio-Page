import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  grid-auto-flow: row;
  place-items: start;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content;
  justify-content: center;
  max-width: 597px;
  gap: 1rem;
`;

export const Label = styled.label`
  padding: 1rem;
  width: 50%;
`;
