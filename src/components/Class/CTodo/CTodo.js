import React from 'react';
import PropTypes from 'prop-types';

export default function CTodo({ todo, cToggleComplete, text, toDelete }) {
  return (
    <li
      className=""
      style={{
        textDecoration:
          todo.complete
            ? 'line-through'
            : '',
        color:
          todo.complete
            ? '#e4e4e4'
            : '',
      }}
    >
      <div className="view">
        <input
          name="status"
          type="checkbox"
          className="toggle"
          id={todo.id}
          onChange={cToggleComplete}
          checked={todo.complete ? 'checked' : ''}
        />
        <label htmlFor="todo-1">
          {text}
        </label>
        <button
          type="button"
          className="destroy"
          onClick={toDelete}
        />
      </div>
    </li>
  );
}

CTodo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  text: PropTypes.string.isRequired,
  cToggleComplete: PropTypes.func.isRequired,
  toDelete: PropTypes.func.isRequired,
};
