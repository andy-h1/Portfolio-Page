import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Varta&display=swap');
body {
    margin: 0 auto;
    background-color: #FBFBFB;
    font-family: 'Varta', sans-serif;
}
`;

export const Wrapper = styled.div`
        margin: 0 auto;
        max-width: 900px;
        padding: 1.5rem;
`;
