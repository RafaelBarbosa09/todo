import styled from "styled-components";

export const Container = styled.form`
  max-width: 800px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  margin-top: -2.7rem;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 20px 0px;
  border-radius: 0.5rem;
  height: 4rem; 
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    padding: 0.8rem 0;
    margin-left: 1rem;
    background: transparent;
    border: none;
    font-weight: regular;
    font-size: 1rem;
    color: var(--title);

    &::placeholder {
      color: var(--title);
    }
  }

  svg {
    color: var(--title);
    height: 1.8rem;
    width: 1.8rem;
  }
`;