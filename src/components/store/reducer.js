import { ADD_TODO, DELETE_TODO} from './actionCreators';
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

      }
    default: 
      return store || initialData
  }

}