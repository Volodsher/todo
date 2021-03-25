import React, { Component } from 'react';
import CTodoForm from '../CTodoForm/CTodoForm';
import CTodoList from '../CTodoList/CTodoList';
import CFooter from '../CFooter/CFooter';

export default class CTodoApp extends Component {
  state = {
    cTodos: [],
    cTodosToShow: 'all'
  }

  addCTodo = (todo) => {
    if (todo.text.trim() !== '') {
      this.setState(prevState => ({
        cTodos: [todo, ...prevState.cTodos],
      }));
    }
  };

  cToggleComplete = (id) => {
    this.setState(prevState => ({
      cTodos: prevState.cTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        
        return todo;
      })
    }))
  };

  deleteTodo = (id) => {
    this.setState(prevState => ({
      cTodos: prevState.cTodos.filter(todo => todo.id !== id),
    }));
  }

  deleteAllCompleted = () => {
    this.setState(prevState => ({
      cTodos: prevState.cTodos.filter(todo => todo.complete !== true)
    }));
  }

  cToggleAllComplete = (toggle) => {
    this.setState(prevState => ({
      cTodos: prevState.cTodos.map(todo => ({
        ...todo,
        complete: !prevState.toggleAllComplete,
      })),
      toggleAllComplete: toggle,
    }));
  }

  handleTodosToShow = (handler) => {
    this.setState(() => ({
      cTodosToShow: handler
    }))
  }

  render() {
    const { cTodos, cTodosToShow } = this.state;
    const {
      addCTodo,
      cToggleComplete,
      deleteTodo,
      cToggleAllComplete,
      handleTodosToShow,
      deleteAllCompleted
    } = this;

    if (cTodos.length === 0) {
      return (
        <>
          <header className="header">Class-Todo 0</header>
          <section className="todoapp">
            <CTodoForm addCTodoSet={addCTodo} getCTodos={cTodos} />
          </section>
        </>
      );
    }

    return (
      <>
        <header className="header">Class-Todo {cTodos.filter((todo) => !todo.complete).length}</header>
        <section className="todoapp">
          <CTodoForm addCTodoSet={addCTodo} getCTodos={cTodos} />
          <CTodoList
            cTasks={cTodos}
            cTasksToShow={cTodosToShow}
            handleDeleteTodo={deleteTodo}
            handleToggleAll={cToggleAllComplete}
            handleToggleOne={cToggleComplete}
          />
          <CFooter
            jobs={cTodos}
            // todosSet={setTodos}
            jobsToShow={cTodosToShow}
            handleJobsToShow={handleTodosToShow}
            deleteAllCompleted={deleteAllCompleted}
          />
        </section>

      </>
    )
  }
}
