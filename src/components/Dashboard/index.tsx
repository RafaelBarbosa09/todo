import { Container } from "./styles";
import { MdSearch } from 'react-icons/md'
import { Todo } from "../Todo";
import { FormEvent, useEffect, useState } from "react";

interface Todo {
  task: string;
}

export function Dashboard() {
  const [todos, setTodos] = useState<Todo[]>([{ task: 'teste 1' }, { task: 'teste 2' }]);
  const [task, setTask] = useState('');

  useEffect(() => {
    setTodos(todos);
  }, []);

  function handleCreateTaskToDo(event: FormEvent) {
    event.preventDefault();

    const teste: Todo = {
      task: task
    }
    setTodos([...todos, teste])
    setTask('')
  }

  return (
    <>
      <Container onSubmit={handleCreateTaskToDo}>
        <MdSearch />
        <input 
        placeholder="Give me a task..."
        value={task}
        onChange={event => setTask(event.target.value)} />
      </Container>
      <Todo tasks={todos} />
    </>
  );
}