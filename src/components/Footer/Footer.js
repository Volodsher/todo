import React from 'react';
import PropTypes from 'prop-types';

export default function Footer(
  { todosGet,
    todosSetter,
    todosToShowGetter,
    TodosToShowSetter }
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
            onClick={() => TodosToShowSetter('all')}
            style={{
              borderColor:
              todosToShowGetter === 'all'
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
            onClick={() => TodosToShowSetter('active')}
            style={{
              borderColor:
              todosToShowGetter === 'active'
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
            onClick={() => TodosToShowSetter('complete')}
            style={{
              borderColor:
              todosToShowGetter === 'complete'
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
          todosSetter([...todosGet].filter(todo => !todo.complete));
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
  todosSetter: PropTypes.func.isRequired,
  TodosToShowSetter: PropTypes.func.isRequired,
  todosToShowGetter: PropTypes.string.isRequired,
};
