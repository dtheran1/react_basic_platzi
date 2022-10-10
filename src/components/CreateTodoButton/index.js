import React from "react";
import './CreateTodoButton.css'
export default function CreateTodoButton(props) {

    const addTask = (msg) => {
        alert(msg)
    }
    return (
        <button
            className="CreateTodoButton"
            onClick={addTask}
        >
            +
        </button>
    )
}