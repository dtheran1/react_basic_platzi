import React from "react";
import './TodoSearch.css'

export default function TodoSearch({search, setSearch}) {

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