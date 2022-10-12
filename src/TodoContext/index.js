import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();
// const { Provider, Consumer } = createContext();

function TodoProvider(props) {
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
    const [search, setSearch] = React.useState('')
    const [isOpenModal, setOpenModal] = React.useState(false)
    const completedTodos = todos.filter(item => !!item.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = []
    if (!search >= 1) {
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

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text: text,
            completed: false
        })
        saveTodos(newTodos);
    }

    const onDeletedTodo = (text) => {
        const indItem = todos.findIndex(e => e.text === text);
        const newTodos = [...todos];
        newTodos.splice(indItem, 1);
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            search,
            setSearch,
            searchedTodos,
            onCompletedTodo,
            onDeletedTodo,
            loading,
            error,
            isOpenModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoProvider, TodoContext };
