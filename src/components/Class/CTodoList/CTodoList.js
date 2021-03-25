import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CTodo from '../CTodo/CTodo';

export default class CTodoList extends Component {
  state = {
    toggleAll: true
  }
  
  allComplete = () => {
    this.setState(prevState => ({
      toggleAll: !prevState.toggleAll
    }));

    this.props.handleToggleAll(this.state.toggleAll);
  }

  render() {
    let cTodosNew = [];
  
    if (this.props.cTasksToShow === 'all') {
      cTodosNew = [...this.props.cTasks];
    } else if (this.props.cTasksToShow === 'active') {
      cTodosNew = [...this.props.cTasks].filter(todo => !todo.complete);
    } else if (this.props.cTasksToShow === 'complete') {
      cTodosNew = [...this.props.cTasks].filter(todo => todo.complete);
    }

    return (
      <section className="main" style={{ display: 'block' }}>
        <input
          onClick={this.allComplete}
          type="checkbox"
          id="c-toggle-all"
          name="toggleAll"
          className="c-toggle-all"
        />
        <label htmlFor="c-toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {cTodosNew.map(todo => (
            <CTodo
              todo={todo}
              key={todo.id}
              text={todo.text}
              toDelete={() => this.props.handleDeleteTodo(todo.id)}
              cToggleComplete={() => this.props.handleToggleOne(todo.id)}
            />
          ))}
        </ul>
      </section>
    );
  }
}

CTodoList.propTypes = {
  handleDeleteTodo: PropTypes.func.isRequired,
  handleToggleOne: PropTypes.func.isRequired,
  cTasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  cTasksToShow: PropTypes.string.isRequired,
};
