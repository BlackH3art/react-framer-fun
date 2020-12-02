// action types
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const SEND_FORM_DATA = 'SEND_FORM_DATA';
export const IS_FORM_SENT = 'IS_FORM_SENT';




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

export const receivedForm = (received) => ({
  type: IS_FORM_SENT,
  payload: received
})