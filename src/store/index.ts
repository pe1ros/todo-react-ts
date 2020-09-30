import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(logger),
));

store.subscribe(() => localStorage.setItem('todos', JSON.stringify(store.getState().todoReducer.todos)));
