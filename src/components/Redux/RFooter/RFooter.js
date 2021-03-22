import React from 'react';
import PropTypes from 'prop-types';

export default function Footer(
  { rTodosGet,
    rTodosSet,
    rTodosToShowGet,
    rTodosToShowSet }
) {
  const lengthOfTodos = () => [...rTodosGet].filter(
    todo => todo.complete === false
  ).length;

  return (
    <footer className="footer" style={{ display: 'block' }}>

      <span className="todo-count">
        {`${lengthOfTodos()} items left`}
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            onClick={() => rTodosToShowSet('all')}
            style={{
              borderColor:
              rTodosToShowGet === 'all'
                ? 'rgba(175, 47, 47, 0.2)'
                : '',
            }}
          >
            All
          </a>
        </li>

        <li>
          <a
            href="#/active"
            onClick={() => rTodosToShowSet('active')}
            style={{
              borderColor:
              rTodosToShowGet === 'active'
                ? 'rgba(175, 47, 47, 0.2)'
                : '',
            }}
          >
            Active
          </a>
        </li>

        <li>
          <a
            href="#/completed"
            onClick={() => rTodosToShowSet('complete')}
            style={{
              borderColor:
              rTodosToShowGet === 'complete'
                ? 'rgba(175, 47, 47, 0.2)'
                : '',
            }}
          >
            Completed
          </a>
        </li>
      </ul>

      <button
        type="button"
        className="clear-completed"
        style={{ display: 'block' }}
        onClick={() => {
          rTodosSet([...rTodosGet].filter(todo => !todo.complete));
        }}
      >
        Clear all complete
      </button>
    </footer>
  );
}

Footer.propTypes = {
  rTodosGet: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  rTodosSet: PropTypes.func.isRequired,
  rTodosToShowSet: PropTypes.func.isRequired,
  rTodosToShowGet: PropTypes.string.isRequired,
};
