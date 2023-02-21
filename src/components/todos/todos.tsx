import { useEffect, useState } from 'react';
import { TypicodeTodos } from './todos-types';
import styles from './todos.module.css';
import useForm from '../../hooks/use-form';

type TodoType = { id: string; name: string };

export default function Todos(): JSX.Element {
  let [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );

      const data = (await response.json()) as TypicodeTodos;

      const fetchedTodos: TodoType[] = [];
      for (const datum of data) {
        fetchedTodos.push({
          id: crypto.randomUUID(),
          name: datum.title,
        });
      }
      setTodos(fetchedTodos);
    };

    getTodos().catch(error => {
      console.error(error);
    });
  }, [setTodos]);

  function addTodo() {
    const updated = [
      { id: crypto.randomUUID(), name: addState.newTodo },
      ...todos,
    ];
    setTodos(updated);
  }

  const {
    formState: addState,
    handleChange: addChange,
    handleSubmit: addSubmit,
  } = useForm(
    { newTodo: '' },
    {
      onSubmit: addTodo,
    },
  );
  const { formState: filterState, handleChange: filterChange } = useForm({
    filter: '',
  });

  todos = todos.filter(item => item.name.includes(filterState.filter));

  return (
    <>
      <form onSubmit={addSubmit}>
        <label htmlFor="addTodo">Add Todo: </label>
        <input
          value={addState.newTodo}
          name="newTodo"
          onChange={addChange}
          id="addTodo"
          type="text"
        />
        <button type="submit">Add</button>
      </form>
      <form>
        <label htmlFor="filter">Filter: </label>
        <input
          value={filterState.filter}
          name="filter"
          onChange={filterChange}
          id="filter"
          type="text"
        />
      </form>
      <ul className={styles.TodoContainer}>
        {todos.map(todo => {
          return <li key={todo.id}>{todo.name}</li>;
        })}
      </ul>
    </>
  );
}
