import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 597px) {
    flex-direction: row;
    width: max-content;
  }
`;

export const Image = styled.img`
  padding: 0;
  border-radius: 50%;
  object-fit: contain;
  box-shadow: 0px 5px 20px -10px #111111;
`;

export const Table = styled.table`
  padding: 1em;
  margin: 1em 0;
`;

export const Header = styled.th`
  text-align: right;
  width: max-content;
  padding: 0.25em 0.5em 0;
`;

export const Data = styled.td`
  padding: 0.25em 0.5em 0;
`;
