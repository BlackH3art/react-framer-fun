// action types
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';





// action creators
export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload: payload
})