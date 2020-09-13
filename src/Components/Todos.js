import React from 'react';

const Todos = ({todos, deleteTodo}) => {

const todoList = todos.length ? (
    todos.map(todo => {
        return (
            <div className="collection-item row" key={todo.id} >
                <span className="col l9">{todo.content}</span>
                <i className="material-icons left col l1 right" onClick={() => deleteTodo(todo.id)}>delete</i>
            </div>
        )
    })
) : (
    <p className="center">You don't have any todos.</p>
)

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
};

export default Todos;