import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  background: var(--shape);
  box-shadow: 0 6px 10px -4px rgb(0 0 0 / 15%);
  border-radius: 0.5rem;

`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem; 
  padding: 2.5rem 1rem;

  & + div {
    border-top: 1px solid #e9e9e9;
  }

  span { 
    margin-left: 1rem;
  }

  span.done {
    text-decoration: line-through;
    text-decoration: line-through 2px #fd507e;
  }

  button {
    background: transparent;
    border: 0;
    
    svg {
      color: var(--color-secundary);
      height: 1.5rem;
      width: 1.5rem;
      cursor: pointer;
    }
  }
`;