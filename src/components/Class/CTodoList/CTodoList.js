import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CTodo from '../CTodo/CTodo';

export default function CTodoList({ cTasks, setCTasks, cTasksToShow }) {
  const [toggleAll, setToggleAll] = useState(true);

  const handleDelete = (id) => {
    setCTasks([...cTasks].filter(todo => todo.id !== id));
  };

  const cToggleComplete = (id) => {
    setCTasks(cTasks.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }

      return todo;
    }));
  };

  const cToggleAllComplete = () => {
    setToggleAll(!toggleAll);

    setCTasks(
      [...cTasks].map(todo => ({
        ...todo,
        complete: toggleAll,
      }))
    );
  };

  let cTodosNew = [];

  if (cTasksToShow === 'all') {
    cTodosNew = [...cTasks];
  } else if (cTasksToShow === 'active') {
    cTodosNew = [...cTasks].filter(todo => !todo.complete);
  } else if (cTasksToShow === 'complete') {
    cTodosNew = [...cTasks].filter(todo => todo.complete);
  }

  return (
    <section className="main" style={{ display: 'block' }}>
      <input
        onClick={cToggleAllComplete}
        type="checkbox"
        id="c-toggle-all"
        name="toggleAll"
        className="c-toggle-all"
      />
      <label htmlFor="c-toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {cTodosNew.map(todo => (
          <CTodo
            todo={todo}
            key={todo.id}
            text={todo.text}
            toDelete={() => handleDelete(todo.id)}
            cToggleComplete={() => cToggleComplete(todo.id)}
          />
        ))}
      </ul>
    </section>
  );
}

CTodoList.propTypes = {
  setCTasks: PropTypes.func.isRequired,
  cTasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  cTasksToShow: PropTypes.string.isRequired,
};
