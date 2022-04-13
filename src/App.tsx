import Todos from './compoenets/Todos';
import NewTodo from './compoenets/NewTodo';
import TodosContextProvider from './store/todos-contex';

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
