import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AppHeader.css';

const AppHeader = ({ addTodo }) => {
  const [label, addItemLabel] = useState('');

  const addItem = (eve) => {
    if (eve.keyCode === 13) {
      addTodo(label);
      addItemLabel('');
    }
  };

  return (
    <header className="header">
      <h1>Todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={label}
        onChange={(eve) => addItemLabel(eve.target.value)}
        onKeyDown={(eve) => addItem(eve)}
      />
    </header>
  );
};
AppHeader.propTypes = {
  addTodo: PropTypes.func,
};

AppHeader.defaultProps = {
  addTodo: () => {},
};

export default AppHeader;
