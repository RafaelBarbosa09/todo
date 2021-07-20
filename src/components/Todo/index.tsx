import { Container, Item } from "./styles";
import { MdDelete } from 'react-icons/md';

interface Todo {
  id: number;
  task: string;
  isComplete: boolean;
}

interface TesteProps {
  tasks: Todo[];
  handleRemoveTask: (id:number) => void;
  handleToggleTaskCompletion: (id:number) => void;
}

export function Todo({ tasks, handleRemoveTask, handleToggleTaskCompletion }: TesteProps) {

  return (
    <Container>
      {tasks.map((todo, index) => {
        return (
          <Item key={index}>
            <input type="checkbox" checked={todo.isComplete} onClick={() => handleToggleTaskCompletion(todo.id)} />
            <span className={todo.isComplete ? 'done' : ''}>{todo.task}</span>
            <button onClick={() => handleRemoveTask(todo.id)}>
              <MdDelete />
            </button>
          </Item>
        );
      })}
    </Container>
  );
}