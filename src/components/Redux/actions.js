export const addRTodo = (payload) => ({
  type: 'ADD_RTODO',
  payload
});

export const deleteOne = (payload) => ({
  type: 'DELETE_ONE',
  payload
});

export const completeOne = (payload) => ({
  type: 'COMPLETE_ONE',
  payload
});

export const completeAll = (payload) => ({
  type: 'COMPLETE_ALL',
  payload
});

export const clearCompleted = () => ({
  type: 'CLEAR_COMPLETED',
});

export const toShowAll = () => ({
  type: 'SHOW_ALL',
});

export const toShowActive = () => ({
  type: 'SHOW_ACTIVE',
});

export const toShowComplete = () => ({
  type: 'SHOW_COMPLETE',
});
