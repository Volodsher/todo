import PropTypes from 'prop-types';
import RTodo from '../RTodo/RTodo';

import { connect } from 'react-redux';
import { deleteOne, completeOne, completeAll } from '../actions';

function RTodoList({
  appState,
  handleDelete,
  toggleComplete,
  toggleCompleteAll
  }) {
  let todosNew = [];

  if (appState.rTodosToShow === 'all') {
    todosNew = [...appState.rTodos];
  } else if (appState.rTodosToShow === 'active') {
    todosNew = [...appState.rTodos].filter(todo => !todo.complete);
  } else if (appState.rTodosToShow === 'complete') {
    todosNew = [...appState.rTodos].filter(todo => todo.complete);
  }

  return (
    <section className="main" style={{ display: 'block' }}>
      <input
        onClick={toggleCompleteAll}
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

const mapStateToProps = (state) => ({
  appState: state, 
});

const mapDispatchToProps = (dispatch) => ({
  handleDelete: (payload) => dispatch(deleteOne(payload)),
  toggleComplete: (payload) => dispatch(completeOne(payload)),
  toggleCompleteAll: (payload) => dispatch(completeAll(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RTodoList);

RTodoList.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  toggleCompleteAll: PropTypes.func.isRequired,
  appState: PropTypes.shape({
    rTodosToShow: PropTypes.string,
  }).isRequired,
};
