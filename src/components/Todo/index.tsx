import { Container, Item } from "./styles";
import { MdDelete } from 'react-icons/md'

export function Todo() {
  return (
    <Container>
      <Item>
        <input type="checkbox" />
        <span className="done">Teste todo</span>
        <MdDelete />
      </Item>
      <Item>
        <input type="checkbox" />
        <span>Teste todo</span>
        <MdDelete />
      </Item>
    </Container>
  );
}