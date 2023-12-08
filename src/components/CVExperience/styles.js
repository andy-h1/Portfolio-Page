import styled from "styled-components";

export const GridItem = styled.li`
  display: grid;
  place-items: center;
  border-bottom: 1px solid #e5e5e5;
  padding: 1rem;

  @media (min-width: 600px) {
    grid-column-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: max-content;
    max-width: none;
    justify-items: start;
  }
`;

export const Title = styled.h3`
  @media (min-width: 600px) {
    justify-self: center;
  }
`;

export const ItalicText = styled.h3`
  font-style: italic;
  font-weight: lighter;

  @media (min-width: 600px) {
    justify-self: end;
  }
`;

export const Text = styled.p`
  text-align: center;

  @media (min-width: 600px) {
    grid-row-start: 2 / 3;
    grid-column: span 3;
  }
`;
