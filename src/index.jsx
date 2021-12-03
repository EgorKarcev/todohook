import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import AppHeader from './components/AppHeader';
import TodoSection from './components/TodoSection';

const App = () => {
  const [infoTodo, setInfoTodo] = useState([]);
  const [filter, setFilter] = useState('All');

  const indexEll = (arrTodo, id) => arrTodo.findIndex((el) => el.id === id);

  const onFilterChage = (filterName) => {
    setFilter(filterName);
  };

  const onCompleted = (id) => {
    setInfoTodo(() => {
      const index = indexEll(infoTodo, id);
      const oldItem = infoTodo[index];
      const newItem = { ...oldItem, completed: !oldItem.completed };
      return [...infoTodo.slice(0, index), newItem, ...infoTodo.slice(index + 1)];
    });
  };

  const onEditing = (id) => {
    setInfoTodo(() => {
      const index = indexEll(infoTodo, id);
      const oldItem = infoTodo[index];
      const newItem = { ...oldItem, editing: !oldItem.editing };
      return [...infoTodo.slice(0, index), newItem, ...infoTodo.slice(index + 1)];
    });
  };

  const onFilter = (item, filterSt) => {
    switch (filterSt) {
      case 'All':
        return item;
      case 'Active':
        return item.filter((el) => !el.completed);
      case 'Completed':
        return item.filter((el) => el.completed);
      default:
        return item;
    }
  };

  const addTodo = (label) => {
    const now = new Date();
    const newItem = {
      label,
      completed: false,
      editing: false,
      id: uuidv4(),
      date: now,
    };
    setInfoTodo(() => [...infoTodo, newItem]);
  };

  const deleteTodo = (id) => {
    setInfoTodo(() => {
      const index = indexEll(infoTodo, id);
      const newInfoTodo = [...infoTodo.slice(0, index), ...infoTodo.slice(index + 1)];
      return newInfoTodo;
    });
  };

  const deleteAll = () => {
    setInfoTodo((prevInfo) => prevInfo.filter((el) => !el.completed));
  };

  const updateTodo = (label, id) => {
    const [item] = infoTodo.filter((el) => el.id === id);
    const newItem = { ...item, label, editing: false };
    setInfoTodo(() => {
      const index = indexEll(infoTodo, id);
      const newInfo = [...infoTodo.slice(0, index), newItem, ...infoTodo.slice(index + 1)];
      return newInfo;
    });
  };

  const todoData = onFilter(infoTodo, filter);

  return (
    <section className="todoapp">
      <AppHeader addTodo={addTodo} />
      <TodoSection
        todosData={infoTodo}
        todos={todoData}
        filter={filter}
        onFilterChage={onFilterChage}
        onEditing={onEditing}
        onDeleted={deleteTodo}
        onCompleted={onCompleted}
        deleteAll={deleteAll}
        updateTodo={updateTodo}
      />
    </section>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
