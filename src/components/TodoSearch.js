import React from "react";
import './TodoSearch.css'
export default function TodoSearch(props) {
    const onSearchValueChange = (event) => {
        console.log(event.target.value)
    }
    return (
        <input className="TodoSearch" placeholder="Search task..." onChange={onSearchValueChange}/>
    )
}