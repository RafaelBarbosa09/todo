import { Container, Item } from "./styles";
import { MdDelete } from 'react-icons/md';
import { useEffect, useState } from "react";

interface Todo {
  id: number;
  task: string;
  isComplete: boolean;
}

interface TesteProps {
  tasks: Todo[];
  handleRemoveTask: (id:number) => void;
}

export function Todo({ tasks, handleRemoveTask }: TesteProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);

  // useEffect(() => {
  //   setTodos(tasks);
  // }, []);

  function handleOnCheckboxIsChecked() {
    setIsChecked(!isChecked);
  }

  return (
    <Container>
      {tasks.map((todo, index) => {
        return (
          <Item key={index}>
            <input type="checkbox" checked={isChecked} onChange={handleOnCheckboxIsChecked} />
            <span className={isChecked ? 'done' : ''}>{todo.task}</span>
            <button onClick={() => handleRemoveTask(todo.id)}>
              <MdDelete />
            </button>
          </Item>
        );
      })}
    </Container>
  );
}