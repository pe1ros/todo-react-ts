import { combineReducers } from 'redux';
import { todoReducer } from './todos/todoReducer';
import { filterReducer } from './filter/filterReducer';

export const rootReducer = combineReducers({
  todoReducer,
  filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>