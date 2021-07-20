import { Container, Item } from "./styles";
import { MdDelete } from 'react-icons/md';
import { useState } from "react";

interface Todo {
  task: string;
}

interface TesteProps {
  tasks: Todo[];
}

export function Todo({ tasks }: TesteProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleOnCheckboxIsChecked() {
    setIsChecked(true);
  }

  return (
    <Container>
      {tasks.map(todo => {
        return (
          <Item key={todo.task}>
            <input type="checkbox" onChange={handleOnCheckboxIsChecked}/>
            <span className={isChecked ? 'done' : ''}>{todo.task}</span>
            <MdDelete />
          </Item>
        );
      })}
    </Container>
  );
}