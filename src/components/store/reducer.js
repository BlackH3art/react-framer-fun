import { ADD_TODO, DELETE_TODO, SEND_FORM_DATA, IS_FORM_SENT} from './actionCreators';
import { initialData } from './initialData';

export default function reducer(store, action) {

  switch (action.type) {
    case ADD_TODO: 
      return {
        ...store,
        todos: store.todos.concat(action.payload)
      }
    case DELETE_TODO: 
      return {
        ...store,
        todos: store.todos.filter(item => item !== action.payload)
      }
    case SEND_FORM_DATA: 
      return {
        ...store,
        form: action.payload
      }
    case IS_FORM_SENT:
      return {
        ...store,
        formSent: action.payload
      }
    default: 
      return store || initialData
  }

}