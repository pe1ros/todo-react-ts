import { createSelector } from 'reselect';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../store/constants';
import { RootState } from '../store/reducers';

const getVisibilityFilter = (store:RootState) => store.filterReducer.filter
const getTodos = (store:RootState) => store.todoReducer.todos

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (filter, todos) => {
    switch (filter) {
      case SHOW_ALL:
        return todos;
      case SHOW_COMPLETED:
        return todos.filter((todo) => todo.completed);
      case SHOW_ACTIVE:
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  },
);
