import React, { Component } from "react";

import Todos from "./Components/Todos";
import AddTodo from "./Components/AddForm";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play guitar" },
    ],
  };

  deleteTodo = (todoForDeleteId) => {
    let newTodos = this.state.todos.filter((todo) => {
      return todo.id !== todoForDeleteId;
    });
    this.setState({
      todos: newTodos,
    });
  };

addTodo = value => {
  let newTodo = {
    id: this.state.todos.length + 1,
    content: value
  };
  let newTodos = [...this.state.todos, newTodo];
  this.setState({
    todos: newTodos
  });
};

  render() {
    return (
      <div className="todo-app container ">
        <h1 className="center blue-text col"> Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
