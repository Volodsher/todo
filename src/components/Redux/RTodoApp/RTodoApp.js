import React, { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import Footer from '../Footer/Footer';

export default function RTodoApp() {
  const [todos, setTodos] = useState([]);
  const [todosToShow, setTodosToShow] = useState('all');

  if (todos.length === 0) {
    return (
      <>
        <header className="header">Redux-Todo 0</header>
        <section className="todoapp">
          <TodoForm setTodosGet={setTodos} getTodos={todos} />
        </section>
      </>
    );
  }

  return (
    <>
      <header className="header">Redux-Todo {todos.filter((todo) => !todo.complete).length}</header>
      <section className="todoapp">
        <TodoForm className="header" setTodosGet={setTodos} getTodos={todos} />
        <TodoList todos={todos} setTodos={setTodos} todosToShow={todosToShow} />
        <Footer
          todosGet={todos}
          todosSet={setTodos}
          todosToShowGet={todosToShow}
          TodosToShowSet={setTodosToShow}
        />
      </section>
    </>
  );
}
