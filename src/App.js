import React, { Fragment } from 'react';
import FuncTodoApp from './components/Func/TodoApp/TodoApp';
import ClassTodoApp from './components/Class/CTodoApp/CTodoApp';
import RTodoApp from './components/Redux/RTodoApp/RTodoApp';

const App = () => (
  <>
    <FuncTodoApp />
    <ClassTodoApp />
    <RTodoApp />
  </>
);

export default App;
