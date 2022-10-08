import React from "react";
import './TodoItem.css'
export default function TodoItem({ text, completed }) {
    const onCompleted = () => {
        alert(`Completaste la tarea ${text}`)
    }
    const onDelete = () => {
        alert(`Borraste la tarea ${text}`)
    }
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`} onClick={onCompleted}> √</span>
            <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
            <span className="Icon Icon-delete" onClick={onDelete}>X</span>
        </li>
    )
}

