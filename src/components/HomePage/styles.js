import styled from 'styled-components';

export const Image = styled.img`
        border-radius: 50%;
        height: 300px;
        width: 300px;
        object-fit: cover;
        grid-row: 1 / 3;
`;

export const FlexWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
`;

export const GridWrapper = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: max-content;
        justify-items: center;
        align-items: center;
`;

export const Text = styled.p`
        margin: 1rem 0 0;
`;
