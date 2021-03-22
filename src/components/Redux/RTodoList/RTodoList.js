import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RTodo from '../RTodo/RTodo';

export default function TodoList({ rTodos, setRTodos, rTodosToShow }) {
  const [toggleAll, setToggleAll] = useState(true);

  const handleDelete = (id) => {
    setRTodos([...rTodos].filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setRTodos(rTodos.map((todo) => {
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

    setRTodos(
      [...rTodos].map(todo => ({
        ...todo,
        complete: toggleAll,
      }))
    );
  };

  let todosNew = [];

  if (rTodosToShow === 'all') {
    todosNew = [...rTodos];
  } else if (rTodosToShow === 'active') {
    todosNew = [...rTodos].filter(todo => !todo.complete);
  } else if (rTodosToShow === 'complete') {
    todosNew = [...rTodos].filter(todo => todo.complete);
  }

  return (
    <section className="main" style={{ display: 'block' }}>
      <input
        onClick={toggleAllComplete}
        type="checkbox"
        id="r-toggle-all"
        name="toggleAll"
        className="r-toggle-all"
      />
      <label htmlFor="r-toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todosNew.map(todo => (
          <RTodo
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
  setRTodos: PropTypes.func.isRequired,
  rTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  rTodosToShow: PropTypes.string.isRequired,
};
