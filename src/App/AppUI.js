import React from "react";
import { TodoCounter } from '../components/TodoCounter'
import CreateTodoButton from "../components/CreateTodoButton";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import TodoSearch from "../components/TodoSearch";

import { Modal } from "../Modal";

import { TodoContext } from '../TodoContext'
import { TodoForm } from "../components/TodoForm";
import { TodosError } from "../components/TodosError";
import { TodosLoading } from "../components/Todosloading";
import { EmptyTodos } from "../components/EmptyTodos";

export default function AppUI() {

    const { error, loading, searchedTodos, onCompletedTodo, onDeletedTodo, isOpenModal, setOpenModal } = React.useContext(TodoContext);

    return (<React.Fragment>
        <TodoCounter />

        <TodoSearch />

        <TodoList>
            {error && <TodosError error={error} />}
            {loading && <TodosLoading />}
            {(!loading && !searchedTodos.length) && <EmptyTodos />}
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
                    <TodoForm />
                </Modal>
            )
        }

        <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>)
}