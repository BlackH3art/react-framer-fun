import reducer from './reducer';
import { validation } from './validationMiddleware'
import { createStore, applyMiddleware, compose } from 'redux';


export default createStore(reducer,  compose(
  applyMiddleware(validation),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
