import { useRef, useContext } from 'react';
import { TodosContext } from '../store/todos-contex';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const sumbitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredText = inputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw new Error('Something went wrong!');
      return;
    }

    todosCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={sumbitHandler} className={classes.form}>
      <label htmlFor='text'></label>
      <input type='text' id='text' ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
