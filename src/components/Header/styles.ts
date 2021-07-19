import styled from 'styled-components';

export const Container = styled.header`
    background: var(--color-primary);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 15rem;

    h1 {
      font-size: 2.5rem;
      color: var(--shape)
    }
`;