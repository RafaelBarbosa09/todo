import { Container } from "./styles";
import { MdSearch } from 'react-icons/md'
import { Todo } from "../Todo";
import { FormEvent, useEffect, useState } from "react";

interface Todo {
  id: number;
  task: string;
  isComplete: boolean;
}

export function Dashboard() {
  const [todos, setTodos] = useState<Todo[]>([{ id: 1, task: 'teste 1', isComplete: false }, { id: 2, task: 'teste 2', isComplete: true }]);
  const [task, setTask] = useState('');

  useEffect(() => {
    setTodos(todos);
  }, []);

  function handleCreateTaskToDo(event: FormEvent) {
    event.preventDefault();

    const teste: Todo = {
      id: Math.random(),
      task: task,
      isComplete: false
    }
    setTodos([...todos, teste])
    setTask('')
  }

  function handleRemoveTask(id: number) {
    const tasksList = todos.filter(todo => todo.id !== id);
    console.log(tasksList)

    setTodos(tasksList)
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
      <Todo tasks={todos} handleRemoveTask={handleRemoveTask} />
    </>
  );
}