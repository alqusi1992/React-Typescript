import React, { useContext } from 'react';

import TodoItems from './TodoItems';
import classes from './Todos.module.css';
import { TodosContext } from '../store/todos-contex';

const Todos: React.FC = () => {
  const TodosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {TodosCtx.items.map((item) => (
        <TodoItems
          onRemoveTodo={TodosCtx.removeTodo.bind(null, item.id)}
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
