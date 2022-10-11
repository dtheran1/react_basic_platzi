import React from "react";
import { TodoCounter } from '../components/TodoCounter'
import CreateTodoButton from "../components/CreateTodoButton";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import TodoSearch from "../components/TodoSearch";

import { TodoContext } from '../TodoContext'

export default function AppUI() {
    return (<React.Fragment>
        <TodoCounter />

        <TodoSearch />

        <TodoContext.Consumer>
            {({error, loading, searchedTodos, onCompletedTodo, onDeletedTodo}) => {
                <TodoList>
                    {error && <p>Desesperate, hubo un error...</p>}
                    {loading && <p>Estamos Cargando, no desesperes...</p>}
                    {(!loading && !searchedTodos.length) && <p>Crea tu primer Todo!</p>}
                    {searchedTodos.map(({ text, completed }) => (
                        <TodoItem
                            text={text}
                            key={text}
                            completed={completed}
                            onComplete={() => onCompletedTodo(text)}
                            onDelete={() => onDeletedTodo(text)}
                        />
                    ))}
                </TodoList>
            }}
        </TodoContext.Consumer>

        <CreateTodoButton />
    </React.Fragment>)
}