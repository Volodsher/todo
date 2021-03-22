import React from 'react';
import PropTypes from 'prop-types';

export default function CFooter(
  { cTodosGet,
    cTodosSet,
    cTodosToShowGet,
    cTodosToShowSet }
) {
  const lengthOfTodos = () => [...cTodosGet].filter(
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
            onClick={() => cTodosToShowSet('all')}
            style={{
              borderColor:
              cTodosToShowGet === 'all'
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
            onClick={() => cTodosToShowSet('active')}
            style={{
              borderColor:
              cTodosToShowGet === 'active'
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
            onClick={() => cTodosToShowSet('complete')}
            style={{
              borderColor:
              cTodosToShowGet === 'complete'
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
          cTodosSet([...cTodosGet].filter(todo => !todo.complete));
        }}
      >
        Clear all complete
      </button>
    </footer>
  );
}

CFooter.propTypes = {
  cTodosGet: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  cTodosSet: PropTypes.func.isRequired,
  cTodosToShowSet: PropTypes.func.isRequired,
  cTodosToShowGet: PropTypes.string.isRequired,
};
