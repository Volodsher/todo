import React, { useState } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import { addRTodo } from '../actions';
import { connect } from 'react-redux';

function RTodoForm({ addNewTodo }) {
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
      addNewTodo(todo)
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

const mapStateToProps = (state) => ({
 state,
});

const mapDispatchToProps = (dispatch) => ({
  addNewTodo: (todo) => dispatch(addRTodo(todo)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RTodoForm);

RTodoForm.propTypes = {
  addNewTodo: PropTypes.func.isRequired,
};
