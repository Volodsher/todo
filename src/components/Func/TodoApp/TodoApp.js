import React, { useState } from 'react';
import Header from '../Header/Header';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import Footer from '../Footer/Footer';

export default function FuncTodoApp() {
  const [todos, setTodos] = useState([]);
  const [todosToShow, setTodosToShow] = useState('all');

  if (todos.length === 0) {
    return (
      <>
        <header className="header">Func-Todo {todos.length}</header>
        <section className="todoapp">
          <TodoForm setTodosGet={setTodos} getTodos={todos} />
        </section>
      </>
    );
  }

  return (
    <>
      <header className="header">Func-Todo {todos.length}</header>
      <section className="todoapp">
        <TodoForm className="header" setTodosGet={setTodos} getTodos={todos} />
        <TodoList todos={todos} setTodos={setTodos} todosToShow={todosToShow} />
        <Footer
          todosGet={todos}
          todosSetter={setTodos}
          todosToShowGetter={todosToShow}
          TodosToShowSetter={setTodosToShow}
        />
      </section>
    </>
  );
}
