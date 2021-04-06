import React, { Fragment } from 'react';
import FuncTodoApp from './components/Func/TodoApp/TodoApp';
import ClassTodoApp from './components/Class/CTodoApp/CTodoApp';
import RTodoApp from './components/Redux/RTodoApp/RTodoApp';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './components/Redux/reducers/reducer';

const store = createStore(appReducer);

const App = () => (
  <>
    <FuncTodoApp />
    <ClassTodoApp />
    <Provider store={store}>
      <RTodoApp />
    </Provider>
    <a
      href="https://github.com/Volodsher/todo/"
    >
      Review a code
    </a>
  </>
);

export default App;
