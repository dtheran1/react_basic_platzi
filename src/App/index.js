// import './App.css';
import React, { useState } from "react";
import { TodoCounter } from '../components/TodoCounter'
import CreateTodoButton from "../components/CreateTodoButton";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import TodoSearch from "../components/TodoSearch";
import AppUI from './AppUI'

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
  const dataLocal = localStorage.getItem('TODOS_V1')
  let parsedTodos;
  if (!dataLocal) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(dataLocal)
  }

  const [todos, setTodos] = useState(parsedTodos)
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
  };

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  const onCompletedTodo = (text) => {
    const indItem = todos.findIndex(e => e.text === text);
    const newTodos = [...todos];
    newTodos[indItem].completed = !newTodos[indItem].completed;
    saveTodos(newTodos);
  }

  const onDeletedTodo = (text) => {
    const indItem = todos.findIndex(e => e.text === text);
    const newTodos = [...todos];
    newTodos.splice(indItem, 1);
    saveTodos(newTodos);
  }

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      search={search}
      setSearch={setSearch}
      searchedTodos={searchedTodos}
      onCompletedTodo={onCompletedTodo}
      onDeletedTodo={onDeletedTodo}
    />
  );
}

export default App;
