import React from "react";
import { TodoContext } from "../../TodoContext";
import './TodoSearch.css'

export default function TodoSearch() {
    const { search, setSearch } = React.useContext(TodoContext)
    const onSearchValueChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <input
            className="TodoSearch"
            placeholder="Search task..."
            value={search}
            onChange={(onSearchValueChange)}
        />
    )
}