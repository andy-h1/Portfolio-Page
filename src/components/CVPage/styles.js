import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 597px) {
    align-items: flex-end;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Button = styled.button`
  background-color: #17a589;
  border: none;
  color: white;
  border-radius: 5px;
  margin: 1rem;
  padding: 10px;
  max-width: 300px;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
`;
