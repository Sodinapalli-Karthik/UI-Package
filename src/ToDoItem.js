// src/ToDoItem.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ToDoItem extends Component {
  render() {
    const { item, handleDelete } = this.props;
    return (
      <li>
        {item.text}
        <button onClick={() => handleDelete(item.id)}>Delete</button>
      </li>
    );
  }
}

ToDoItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default ToDoItem;
