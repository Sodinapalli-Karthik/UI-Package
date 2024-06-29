// src/ToDoApp.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoList from './ToDoList';

class ToDoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: ''
    };
  }

  handleChange = (e) => {
    this.setState({ currentItem: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      text: this.state.currentItem,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      currentItem: ''
    }));
  }

  handleDelete = (id) => {
    this.setState(state => ({
      items: state.items.filter(item => item.id !== id)
    }));
  }

  render() {
    return (
      <div className="todo-app">
        <h1>To-Do List</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter a new task"
            value={this.state.currentItem}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
        <ToDoList items={this.state.items} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

ToDoApp.propTypes = {
  items: PropTypes.array,
  currentItem: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleDelete: PropTypes.func
};

export default ToDoApp;
