// import './App.css';
import React from "react";
import { TodoCounter } from './components/TodoCounter'
import CreateTodoButton from "./components/CreateTodoButton";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import TodoSearch from "./components/TodoSearch";

const todos = [
  {
    text: 'Hola este es un todo',
    completed:false
  },
  {
    text: 'Tomar el curso',
    completed:false
  },
  {
    text: 'Bañate',
    completed:false
  },
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch/>

      <TodoList>
        {todos.map(({text, completed}) => (
          <TodoItem text={text} key={text} />
        ))}
        </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
