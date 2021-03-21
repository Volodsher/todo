import React from 'react';
import PropTypes from 'prop-types';

export default function Footer(
  { todosGet,
    todosSet,
    todosToShowGet,
    TodosToShowSet }
) {
  const lengthOfTodos = () => [...todosGet].filter(
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
            onClick={() => TodosToShowSet('all')}
            style={{
              borderColor:
              todosToShowGet === 'all'
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
            onClick={() => TodosToShowSet('active')}
            style={{
              borderColor:
              todosToShowGet === 'active'
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
            onClick={() => TodosToShowSet('complete')}
            style={{
              borderColor:
              todosToShowGet === 'complete'
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
          todosSet([...todosGet].filter(todo => !todo.complete));
        }}
      >
        Clear all complete
      </button>
    </footer>
  );
}

Footer.propTypes = {
  todosGet: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  todosSet: PropTypes.func.isRequired,
  TodosToShowSet: PropTypes.func.isRequired,
  todosToShowGet: PropTypes.string.isRequired,
};
