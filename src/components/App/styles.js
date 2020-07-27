import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

body {
    margin: 0 auto;
    font-family: 'Raleway', sans-serif;
}
`;

export const Wrapper = styled.div`
        margin: 0 auto;
        max-width: 900px;
        padding: 1.5rem;
`;
