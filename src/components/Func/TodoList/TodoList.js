import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';

export default function TodoList({ tasks, setTasks, tasksToShow }) {
  const [toggleAll, setToggleAll] = useState(true);

  const handleDelete = (id) => {
    setTasks([...tasks].filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }

      return todo;
    }));
  };

  const toggleAllComplete = () => {
    setToggleAll(!toggleAll);

    setTasks(
      [...tasks].map(todo => ({
        ...todo,
        complete: toggleAll,
      }))
    );
  };

  let todosNew = [];

  if (tasksToShow === 'all') {
    todosNew = [...tasks];
  } else if (tasksToShow === 'active') {
    todosNew = [...tasks].filter(todo => !todo.complete);
  } else if (tasksToShow === 'complete') {
    todosNew = [...tasks].filter(todo => todo.complete);
  }

  return (
    <section className="main" style={{ display: 'block' }}>
      <input
        onClick={toggleAllComplete}
        type="checkbox"
        id="toggle-all"
        name="toggleAll"
        className="toggle-all"
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todosNew.map(todo => (
          <Todo
            todo={todo}
            key={todo.id}
            text={todo.text}
            toDelete={() => handleDelete(todo.id)}
            toggleComplete={() => toggleComplete(todo.id)}
          />
        ))}
      </ul>
    </section>
  );
}

TodoList.propTypes = {
  setTasks: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  tasksToShow: PropTypes.string.isRequired,
};
