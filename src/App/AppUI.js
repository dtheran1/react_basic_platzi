import React from "react";
import { TodoCounter } from '../components/TodoCounter'
import CreateTodoButton from "../components/CreateTodoButton";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import TodoSearch from "../components/TodoSearch";

export default function AppUI({
    completedTodos,
    totalTodos,
    search,
    setSearch,
    searchedTodos,
    onCompletedTodo,
    onDeletedTodo,
}) {
    return (<React.Fragment>
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
                <TodoItem
                    text={text}
                    key={text}
                    completed={completed}
                    onComplete={() => onCompletedTodo(text)}
                    onDelete={() => onDeletedTodo(text)}
                />
            ))}
        </TodoList>

        <CreateTodoButton />
    </React.Fragment>)
}