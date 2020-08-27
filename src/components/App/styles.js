import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
    margin: 0 auto;
    background-color: #FBFBFB;
    font-family: 'Varta', sans-serif;
    box-sizing: border-box;
}
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: 1.5rem;
`;
