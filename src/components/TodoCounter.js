import React from "react";
import './TodoCounter.css'

function TodoCounter({ completedTodos, totalTodos, searchTodo }) {
    return (
        <div className="TodoCounter">
            <h1>Bienvenido a tu App de Todos!</h1>
            <h2>Has completado {completedTodos} de {searchTodo ? searchTodo : totalTodos} TODOs</h2>
        </div>
    )
}

export { TodoCounter }