import { Container } from "./styles";
import { MdSearch } from 'react-icons/md';
import { Todo } from "../Todo";
import { FormEvent, useState } from "react";

interface Todo {
  id: number;
  task: string;
  isComplete: boolean;
}

export function Dashboard() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState('');

  function handleCreateTaskToDo(event: FormEvent) {
    event.preventDefault();

    const todo: Todo = {
      id: Math.random(),
      task: task,
      isComplete: false
    }
    setTodos([...todos, todo])
    setTask('')
  }

  function handleRemoveTask(id: number) {
    const tasksList = todos.filter(todo => todo.id !== id);
    console.log(tasksList)

    setTodos(tasksList)
  }

  function handleToggleTaskCompletion(id: number) {
    const newTasks = todos.map(todo => todo.id === id ? {
      ...todo,
      isComplete: !todo.isComplete
    } : todo);

    setTodos(newTasks);
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
      <Todo tasks={todos} handleRemoveTask={handleRemoveTask} handleToggleTaskCompletion={handleToggleTaskCompletion} />
    </>
  );
}