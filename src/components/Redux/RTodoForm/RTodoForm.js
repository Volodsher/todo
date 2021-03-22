import React, { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

export default function RTodoForm({ setRTodosGet, getRTodos }) {
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
      setRTodosGet([todo, ...getRTodos]);
    }

    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
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

RTodoForm.propTypes = {
  setRTodosGet: PropTypes.func.isRequired,
  getRTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
};
