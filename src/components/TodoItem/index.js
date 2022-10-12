import React from "react";
import { CompleteIcon } from "../TodoIcon/CompleteICon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import './TodoItem.css'
export default function TodoItem({ text, completed, onComplete, onDelete }) {

    return (
        <li className="TodoItem">
            <CompleteIcon completed={completed} onComplete={onComplete} />
            <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
            <DeleteIcon onDelete={onDelete} />
        </li>
    )
}

