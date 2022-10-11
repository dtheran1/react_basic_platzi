import React from "react";
import { TodoContext } from "../../TodoContext";
import './TodoCounter.css'

function TodoCounter() {
    const { completedTodos, totalTodos, searchTodo } = React.useContext(TodoContext)
    return (
        <div className="TodoCounter">
            <h1>Bienvenido a tu App de Todos!</h1>
            <h2>Has completado {completedTodos} de {searchTodo ? searchTodo : totalTodos} TODOs</h2>
        </div>
    )
}

export { TodoCounter }