// import './App.css';
import React, { useState } from "react";
import { TodoCounter } from './components/TodoCounter'
import CreateTodoButton from "./components/CreateTodoButton";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import TodoSearch from "./components/TodoSearch";

const defTodos = [
  {
    text: 'Hola este es un todo',
    completed: false
  },
  {
    text: 'Tomar el curso',
    completed: false
  },
  {
    text: 'Bañate',
    completed: true
  },
]

function App() {
  const [todos, setTodos] = useState(defTodos)
  const [search, setSearch] = useState('')
  const completedTodos = todos.filter(item => !!item.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = []
  if ( !search>=1 ) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(item => (
      item.text.toLowerCase().includes(search.toLowerCase())
    ))
  }

  return (
    <React.Fragment>
      <TodoCounter
        completedTodos={completedTodos}
        totalTodos={totalTodos}
      />

      <TodoSearch
        search={search}
        setSearch={setSearch}
      />

      <TodoList>
        {searchedTodos.map(({ text, completed }) => (
          <TodoItem text={text} key={text} completed={completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
