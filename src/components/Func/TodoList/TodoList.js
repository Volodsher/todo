import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';

export default function TodoList({ todos, setTodos, todosToShow }) {
  const [toggleAll, setToggleAll] = useState(true);

  const handleDelete = (id) => {
    setTodos([...todos].filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => {
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

    setTodos(
      [...todos].map(todo => ({
        ...todo,
        complete: toggleAll,
      }))
    );
  };

  let todosNew = [];

  if (todosToShow === 'all') {
    todosNew = [...todos];
  } else if (todosToShow === 'active') {
    todosNew = [...todos].filter(todo => !todo.complete);
  } else if (todosToShow === 'complete') {
    todosNew = [...todos].filter(todo => todo.complete);
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
  setTodos: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  todosToShow: PropTypes.string.isRequired,
};
