import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { toShowAll, toShowActive, toShowComplete, clearCompleted } from '../actions';

function RFooter(
  { 
    appState,
    showAll,
    showActive,
    showComplete,
    clearCompleted
  }
) {
  const { rTodos, rTodosToShow } = appState;
  const lengthOfTodos = () => [...rTodos].filter(
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
            onClick={() => showAll()}
            style={{
              borderColor:
              rTodosToShow === 'all'
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
            onClick={() => showActive()}
            style={{
              borderColor:
              rTodosToShow === 'active'
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
            onClick={() => showComplete()}
            style={{
              borderColor:
              rTodosToShow === 'complete'
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
          clearCompleted();
        }}
      >
        Clear all completed
      </button>
    </footer>
  );
}

const mapStateToProps = (state) => ({
  appState: state,
})

const mapDispatchToProps = (dispatch) => ({
  showAll: () => dispatch(toShowAll()),
  showActive: () => dispatch(toShowActive()),
  showComplete: () => dispatch(toShowComplete()),
  clearCompleted: () => dispatch(clearCompleted()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RFooter);

RFooter.propTypes = {
  clearCompleted: PropTypes.func.isRequired,
  showAll: PropTypes.func.isRequired,
  showActive: PropTypes.func.isRequired,
  showComplete: PropTypes.func.isRequired,
  appState: PropTypes.shape({
    rTodosToShow: PropTypes.string,
  }).isRequired,
};
