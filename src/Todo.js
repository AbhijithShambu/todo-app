import React from 'react'

export default function Todo(props) {
    return (
        <div className="todo">
            <h3 id="title">{props.title}</h3>
            {/* <p>{props.description}</p> */}
        </div>
    )
}
