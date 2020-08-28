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
  padding: 1em;
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
