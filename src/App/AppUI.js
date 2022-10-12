import React from "react";
import { TodoCounter } from '../components/TodoCounter'
import CreateTodoButton from "../components/CreateTodoButton";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import TodoSearch from "../components/TodoSearch";

import { Modal } from "../Modal";

import { TodoContext } from '../TodoContext'

export default function AppUI() {

    const { error, loading, searchedTodos, onCompletedTodo, onDeletedTodo, isOpenModal, setOpenModal } = React.useContext(TodoContext);

    return (<React.Fragment>
        <TodoCounter />

        <TodoSearch />

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

        {
            !!isOpenModal && (
                <Modal>
                    <p>Teletransportt</p>
                </Modal>
            )
        }

        <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>)
}