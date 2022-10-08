import React from "react";
import './TodoCounter.css'

function TodoCounter() {
    return (
        <div className="TodoCounter">
            <h1>Bienvenido a tu App de Todos!</h1>
            <h2>Has completado 2 de 3 TODOs</h2>
        </div>
    )
}

export { TodoCounter }