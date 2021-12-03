import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../TodoList';
import FooterTodo from '../FooterTodo';
import './TodoSection.css';

const TodoSection = ({
  todos,
  todosData,
  filter,
  onDeleted,
  onCompleted,
  onEditing,
  onFilterChage,
  deleteAll,
  updateTodo,
}) => (
  <section className="main">
    <TodoList
      todos={todos}
      onDeleted={(id) => onDeleted(id)}
      onCompleted={(id) => onCompleted(id)}
      onEditing={(id) => onEditing(id)}
      updateTodo={updateTodo}
    />
    <FooterTodo todos={todosData} filter={filter} onFilterChage={onFilterChage} deleteAll={deleteAll} />
  </section>
);
TodoSection.defaultProps = {
  todos: [],
  todosData: [],
  filter: 'All',
  onDeleted: () => {},
  onCompleted: () => {},
  onEditing: () => {},
  updateTodo: () => {},
  onFilterChage: () => {},
  deleteAll: () => {},
};
TodoSection.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  todosData: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  onDeleted: PropTypes.func,
  onCompleted: PropTypes.func,
  onEditing: PropTypes.func,
  updateTodo: PropTypes.func,
  onFilterChage: PropTypes.func,
  deleteAll: PropTypes.func,
};

export default TodoSection;
