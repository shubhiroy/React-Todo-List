import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    todo: "",
  };

  inputChangeHandler = (event) => {
    this.setState({
      todo: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.todo !== "") {
      this.props.addTodo(this.state.todo);
      this.setState({
        todo: "",
      });
    }
  };

  render() {
    return (
      <form className="row" onSubmit={this.handleSubmit}>
        <div className="input-field col l10">
          <input
            value={this.state.todo}
            type="text"
            id="newTodo"
            onChange={this.inputChangeHandler}
          />
          <label htmlFor="newTodo" className="active">
            Enter new todo here
          </label>
        </div>
        <div className="col l2">
          <button
            className="btn-floating btn-large pulse red"
            onClick={this.handleSubmit}
          >
            <i className="material-icons">add</i>
          </button>
        </div>
      </form>
    );
  }
}

export default AddTodo;
