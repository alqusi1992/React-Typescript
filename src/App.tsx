import './App.css';
import Todo from './compoenets/Todo';

function App() {
  return (
    <div className='App'>
      <Todo items={['Learn Reactt', 'typescript']} />
    </div>
  );
}

export default App;
