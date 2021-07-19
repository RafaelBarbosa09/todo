import { Container } from "./styles";
import { MdSearch } from 'react-icons/md'
import { Todo } from "../Todo";

export function Dashboard() {
  return (
    <>
      <Container>
        <MdSearch />
        <input placeholder="Give me a task..." />
      </Container>
      <Todo />
    </>
  );
}