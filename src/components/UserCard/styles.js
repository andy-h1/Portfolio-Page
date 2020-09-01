import styled from 'styled-components';

export const UserCardWrapper = styled.div`
  background: #f9f9f9;
  border: 1px solid #c9c9c9;
  padding: 10px;
  border-radius: 8px;
  width: 260px;
  height: auto;
  font-family: inherit;
  font-size: inherit;
`;

export const Input = styled.input`
  box-sizing: border-box;
  padding: 10px;
  margin: 10px 0;
  border: 0;
  border-bottom: 1px solid #eee;
  width: 65%;
  font-family: inherit;
  font-size: inherit;
`;

export const ButtonWrapper = styled.span`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: #727371;
  border: none;
  color: white;
  border-radius: 8px;
  margin: 1em;
  padding: 0.25em 0.75em;
  text-align: center;
  line-height: 1.1;
  min-width: 10ch;
  min-height: 39px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);
  cursor: pointer;
`;

export const Table = styled.table`
  padding: 1em;
  margin: 1em;
  display: flex;
  justify-content: center;
`;

export const Header = styled.th`
  width: max-content;
  padding: 0.5em;
`;

export const Data = styled.td`
  margin: 5em;
  padding: 0.25em 0.5em 0;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;
