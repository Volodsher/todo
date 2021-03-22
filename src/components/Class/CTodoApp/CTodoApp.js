import React, { useState } from 'react';
import CTodoForm from '../CTodoForm/CTodoForm';
import CTodoList from '../CTodoList/CTodoList';
import CFooter from '../CFooter/CFooter';

export default function CTodoApp() {
  const [cTodos, setCTodos] = useState([]);
  const [cTodosToShow, setCTodosToShow] = useState('all');

  if (cTodos.length === 0) {
    return (
      <>
        <header className="header">Class-Todo 0</header>
        <section className="todoapp">
          <CTodoForm setCTodosGet={setCTodos} getCTodos={cTodos} />
        </section>
      </>
    );
  }

  return (
    <>
      <header className="header">Class-Todo {cTodos.filter((todo) => !todo.complete).length}</header>
      <section className="todoapp">
        <CTodoForm className="header" setCTodosGet={setCTodos} getCTodos={cTodos} />
        <CTodoList cTasks={cTodos} setCTasks={setCTodos} cTasksToShow={cTodosToShow} />
        <CFooter
          cTodosGet={cTodos}
          cTodosSet={setCTodos}
          cTodosToShowGet={cTodosToShow}
          cTodosToShowSet={setCTodosToShow}
        />
      </section>
    </>
  );
}
