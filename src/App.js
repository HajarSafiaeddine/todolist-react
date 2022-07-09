import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { TodoList } from './components/TodoList';

function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState('all');
  const [filtredTodos,setFiltredTodos] = useState([]);
  const filterHandler = () =>{
    switch(status){
      case "completed":
        setFiltredTodos(todos.filter((todo) => todo.completed))
        break;
      case "completed":
          setFiltredTodos(todos.filter((todo) => todo.completed))
        break;
      default:
            setFiltredTodos(todos);
        break;
    }
  }
  return (
    <div className="App">
      <header>
        <h1>my todo list</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus}/>
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
