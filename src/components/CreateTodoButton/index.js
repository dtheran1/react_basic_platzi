import React from "react";
import './CreateTodoButton.css'
export default function CreateTodoButton({setOpenModal}) {
    const addTask = () => {
        setOpenModal(prevState => !prevState)
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