// import './App.css';
import React, { useEffect, useState } from "react";
import AppUI from './AppUI'

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(()=> {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }, 3000);
  })

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (error) {
      setError(error)
    }
  }

  return {item, saveItem, loading, error}
}

function App() {
  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
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
      loading={loading}
      error={error}
    />
  );
}

export default App;
