import React, { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

export default class TodoForm extends Component {
  state = {
    text: '',
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addCTodoSet({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.handleChange}
          value={this.state.text}
        />
      </form>
    );
  }
}

TodoForm.propTypes = {
  addCTodoSet: PropTypes.func.isRequired,
};
