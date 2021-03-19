import React, { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

export default function TodoForm({ setTodosGet, getTodos }) {
  const [text, setText] = useState('');

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const todo = {
      id: shortid.generate(),
      text,
      complete: false,
    };

    if (todo.text.trim() !== '') {
      setTodosGet([todo, ...getTodos]);
    }

    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>functional todo</h1>
      <input
        name="text"
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={handleChange}
        value={text}
      />
    </form>
  );
}

TodoForm.propTypes = {
  setTodosGet: PropTypes.func.isRequired,
  getTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
};
