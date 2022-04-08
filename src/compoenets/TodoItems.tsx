import classes from './TodoItem.module.css';

const todoItems: React.FC<{ text: string; onRemoveTodo: (event: React.MouseEvent) => void }> = (
  props,
) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default todoItems;
