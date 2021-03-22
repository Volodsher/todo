import React, { useState } from 'react';
import RTodoForm from '../RTodoForm/RTodoForm';
import RTodoList from '../RTodoList/RTodoList';
import RFooter from '../RFooter/RFooter';

export default function RTodoApp() {
  const [rTodos, setRTodos] = useState([]);
  const [rTodosToShow, setRTodosToShow] = useState('all');

  if (rTodos.length === 0) {
    return (
      <>
        <header className="header">Redux-Todo 0</header>
        <section className="todoapp">
          <RTodoForm setRTodosGet={setRTodos} getRTodos={rTodos} />
        </section>
      </>
    );
  }

  return (
    <>
      <header className="header">Redux-Todo {rTodos.filter((todo) => !todo.complete).length}</header>
      <section className="todoapp">
        <RTodoForm className="header" setRTodosGet={setRTodos} getRTodos={rTodos} />
        <RTodoList rTodos={rTodos} setRTodos={setRTodos} rTodosToShow={rTodosToShow} />
        <RFooter
          rTodosGet={rTodos}
          rTodosSet={setRTodos}
          rTodosToShowGet={rTodosToShow}
          rTodosToShowSet={setRTodosToShow}
        />
      </section>
    </>
  );
}
