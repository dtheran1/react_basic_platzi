import React from "react";
import { TodoContext } from "../../TodoContext";
import './TodoForm.css'

function TodoForm() {
    const [newTodo, setNewTodo] = React.useState('')
    const { addTodo, setOpenModal } = React.useContext(TodoContext)

    const onCancel = () => {
        setOpenModal(false);
    }

    const onAdd = (e) => {
        e.preventDefault();
        addTodo(newTodo);
        setOpenModal(false);
    }

    const onChange = (e) => {
        setNewTodo(e.target.value)
    }
    return (
        <form onSubmit={onAdd}>
            <label>Escribe tu nueva Tarea</label>
            <textarea placeholder="Ingresa una nueva Tarea" value={newTodo} onChange={onChange} />

            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel" type="button" onClick={onCancel}>Cancelar</button>
                <button className="TodoForm-button TodoForm-button--add" type="submit">Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };