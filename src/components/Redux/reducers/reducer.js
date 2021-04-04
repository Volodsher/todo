const initialState = {
  rTodos: [],
  rTodosToShow: 'all',
  toggleAll: true,
};

const appReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case 'ADD_RTODO':
      return {
        ...state,
        rTodos: [action.payload, ...state.rTodos],
      };
    case 'DELETE_ONE':
      return {
        ...state,
        rTodos: state.rTodos.filter(todo => todo.id !== action.payload)
      };
    case 'COMPLETE_ONE':
      return {
        ...state,
        rTodos: state.rTodos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              complete: !todo.complete,
            };
          }
    
          return todo;
        })
      };
    case 'COMPLETE_ALL':
      return {
        ...state,
        toggleAll: !state.toggleAll,
        rTodos: state.rTodos.map(todo => ({
            ...todo,
            complete: state.toggleAll,
        }))
      };
    case 'SHOW_ALL':
      return {
        ...state,
        rTodosToShow: 'all',
      };
    case 'SHOW_ACTIVE':
      return {
        ...state,
        rTodosToShow: 'active',
      };
    case 'SHOW_COMPLETE':
      return {
        ...state,
        rTodosToShow: 'complete',
      };
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        rTodos: state.rTodos.filter(todo => !todo.complete),
      };
    default:
      return state;
  }
}

export default appReducer;
