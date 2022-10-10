import React from "react";
import './TodoList.css'
export default function TodoList({children}) {
    return (
        <section>
            <ul>
                {children}
            </ul>
        </section>
    )
}