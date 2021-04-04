import RTodoForm from '../RTodoForm/RTodoForm';
import RTodoList from '../RTodoList/RTodoList';
import RFooter from '../RFooter/RFooter';

import { connect } from 'react-redux';


function RTodoApp({ appState }) {
  const { rTodos } = appState;

  if (rTodos.length === 0) {
    return (
      <>
        <header className="header">Redux-Todo 0</header>
        <section className="todoapp">
          <RTodoForm />
        </section>
        <p>{rTodos.map((todo) => <p>{todo.text}</p>)}</p>
      </>
    );
  }

  return (
    <>
      <header className="header">Redux-Todo {rTodos.filter((todo) => !todo.complete).length}</header>
      <section className="todoapp">
        <RTodoForm />
        <RTodoList />
        <RFooter />
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  appState: state,
});

export default connect(mapStateToProps)(RTodoApp);
