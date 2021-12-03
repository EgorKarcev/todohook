import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './TodoListItem.css';
import { formatDistanceToNow } from 'date-fns';
import classNames from 'classnames';

const TodoListItem = ({ label, onDeleted, onCompleted, completed, onEditing, editing, date, updateTodo, id }) => {
  const [upLabel, addItemLabel] = useState(label);
  const [second, setSecond] = useState(0);
  const [flagsTimer, setFlagsTimer] = useState(false);

  const addItem = (eve) => {
    if (eve.keyCode === 13) updateTodo(upLabel, id);
  };

  const className = classNames({
    completed,
    editing,
  });
  useEffect(() => {
    const tim = setInterval(() => {
      if (flagsTimer) setSecond((prev) => prev + 1);
    }, 1000);
    return () => clearTimeout(tim);
  }, [flagsTimer]);

  const newDate = formatDistanceToNow(date, { includeSeconds: true });
  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onCompleted} />
        <label>
          <span className="description"> {label} </span>
          <span className="created"> {newDate} </span>
        </label>
        <span className="description">
          <button type="button" className="icon icon-play" onClick={() => setFlagsTimer(true)}>
            {' '}
          </button>
          <button type="button" className="icon icon-pause" onClick={() => setFlagsTimer(false)}>
            {' '}
          </button>
          {second}
        </span>
        <button type="button" className="icon icon-edit" onClick={onEditing}>
          {' '}
        </button>
        <button type="button" className="icon icon-destroy" onClick={onDeleted}>
          {' '}
        </button>
      </div>
      <input
        type="text"
        className="edit"
        value={upLabel}
        onChange={(eve) => addItemLabel(eve.target.value)}
        onKeyDown={(eve) => addItem(eve)}
      />
    </li>
  );
};

TodoListItem.propTypes = {
  label: PropTypes.string,
  completed: PropTypes.bool,
  editing: PropTypes.bool,
  onCompleted: PropTypes.func,
  onEditing: PropTypes.func,
  onDeleted: PropTypes.func,
  updateTodo: PropTypes.func,
  id: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};

TodoListItem.defaultProps = {
  label: 'No name',
  completed: false,
  editing: false,
  onCompleted: () => {},
  onEditing: () => {},
  onDeleted: () => {},
  updateTodo: () => {},
  date: new Date(),
  id: 500,
};

export default TodoListItem;
