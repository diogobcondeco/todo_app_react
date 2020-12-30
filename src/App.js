import logo from './logo.svg';
import './App.css';
import NewTodoInput from './components/NewTodoInput';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <NewTodoInput></NewTodoInput>
          <Todos></Todos>
        </p>
      </header>
    </div>
  );
}

export default App;
