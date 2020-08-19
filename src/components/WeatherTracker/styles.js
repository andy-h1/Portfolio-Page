import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    justify-content: center;
    align-items: center;
  }
`;
