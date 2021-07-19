import { Container } from "./styles";
import { MdSearch } from 'react-icons/md'

export function Dashboard() {
  return (
    <Container>
      <MdSearch />
      <input placeholder="Give me a task..." />
    </Container>
  );
}