import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import TodoListItem from '../TodoListItem';
import './TodoList.css';

const TodoList = ({ todos, onDeleted, onCompleted, onEditing, updateTodo }) => {
  const el = todos.map(({ ...item }) => (
    <Fragment key={item.id}>
      <TodoListItem
        {...item}
        onDeleted={() => onDeleted(item.id)}
        onCompleted={() => onCompleted(item.id)}
        onEditing={() => onEditing(item.id)}
        updateTodo={updateTodo}
      />
    </Fragment>
  ));

  return todos.length !== 0 ? <ul className="todo-list">{el}</ul> : <ul className="todo-list">There’s no todos yet</ul>;
};
TodoList.defaultProps = {
  todos: [],
  onDeleted: () => {},
  onCompleted: () => {},
  onEditing: () => {},
  updateTodo: () => {},
};
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onDeleted: PropTypes.func,
  onCompleted: PropTypes.func,
  onEditing: PropTypes.func,
  updateTodo: PropTypes.func,
};

export default TodoList;
