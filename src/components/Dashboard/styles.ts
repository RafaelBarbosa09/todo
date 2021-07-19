import styled from "styled-components";

export const Container = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  margin-top: -4.5rem;

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem; 
    border-radius: 0.5rem;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 20px 0px;
    font-weight: regular;

    &::placeholder {
      color: var(--text-input);
    }
  }
`;