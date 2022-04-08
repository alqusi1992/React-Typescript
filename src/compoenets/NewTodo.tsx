import { useRef } from 'react';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const sumbitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredText = inputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw new Error('Something went wrong!');
      return;
    }

    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={sumbitHandler}>
      <label htmlFor='text'></label>
      <input type='text' id='text' ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
