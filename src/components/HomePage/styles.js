import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  place-items: center;
  /* grid-auto-flow: column; */

  @media (min-width: 600px) {
    grid-auto-flow: column;
    grid-column-gap: 1em;
    margin: 1em 0;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 5em);
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 300px;
  width: 300px;
  object-fit: cover;
  margin: 1em;
  grid-row: 1 / span 3;

  @media (min-width: 600px) {
    justify-self: start;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  margin: 1em 0;
  text-align: center;

  @media (min-width: 600px) {
    grid-column: 2/3;
  }
`;

export const Button = styled.button`
  background-color: #17a589;
  border: none;
  color: white;
  border-radius: 5px;
  margin: 0 1rem;
  padding: 10px;
  max-width: 300px;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
`;
