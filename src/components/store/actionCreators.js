// action types
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const SEND_FORM_DATA = 'SEND_FORM_DATA';





// action creators
export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload: payload
})

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
})

export const sendFormData = (inputValue) => ({
  type: SEND_FORM_DATA,
  payload: inputValue,
})