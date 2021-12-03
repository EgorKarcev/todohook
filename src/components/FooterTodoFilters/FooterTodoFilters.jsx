import React from 'react';
import './FooterTodoFilters.css';
import PropTypes from 'prop-types';

const FooterTodoFilters = ({ filter, onFilterChage }) => {
  const buttonItem = [
    { names: 'All', label: 'All' },
    { names: 'Active', label: 'Active' },
    { names: 'Completed', label: 'Completed' },
  ];

  const button = buttonItem.map(({ names, label }) => {
    const isActive = filter === names;
    const clazz = isActive ? 'selected' : null;
    return (
      <li key={names}>
        <button
          type="button"
          className={clazz}
          onClick={() => {
            onFilterChage(names);
          }}
        >
          {label}
        </button>
      </li>
    );
  });

  return <ul className="filters">{button}</ul>;
};

FooterTodoFilters.propTypes = {
  filter: PropTypes.string,
  onFilterChage: PropTypes.func,
};

FooterTodoFilters.defaultProps = {
  filter: 'All',
  onFilterChage: () => {},
};

export default FooterTodoFilters;
