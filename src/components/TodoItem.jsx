import React from 'react'

export default function TodoItem({ todo }) {
    const { id, task, completed } = todo

    const handleTodoClick = () => {
        toggleTodo(id);
    }
    return (
        <li> <input type="checkbox" checked = {completed} onChange={handleTodoClick}/>
            {task}
        </li>
    )
}
