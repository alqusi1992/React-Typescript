import React from 'react';

import TodoItems from './TodoItems';
import Todo from '../models/todo';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItems key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
