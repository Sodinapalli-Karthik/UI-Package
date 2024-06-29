// src/ToDoList.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
  render() {
    const { items, handleDelete } = this.props;
    return (
      <ul>
        {items.map(item => (
          <ToDoItem key={item.id} item={item} handleDelete={handleDelete} />
        ))}
      </ul>
    );
  }
}

ToDoList.propTypes = {
  items: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default ToDoList;
