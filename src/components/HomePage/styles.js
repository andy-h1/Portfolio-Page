import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  place-items: center;

  @media (min-width: 600px) {
    grid-column-gap: 1rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content;
    max-width: none;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 300px;
  width: 300px;
  object-fit: cover;
  grid-row: 1 / 3;
  margin: 0 0 1rem 0;

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
  margin: 1rem 0 0;

  @media (max-width: 600px) {
    text-align: center;
  }
`;
