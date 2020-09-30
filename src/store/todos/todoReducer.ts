import {
  ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO, CLEAR_COMPLETED,
} from '../constants';  

import { TodoState, toDoReducerActions, Todo } from '../../types';

const userTodos= localStorage.getItem('todos')
const initialState: TodoState = {
  todos:   userTodos !== null ? JSON.parse(userTodos) : [],
};


export function todoReducer(state: TodoState = initialState, action: toDoReducerActions): TodoState {
  switch (action.type) {
    case ADD_TODO:
      return {
         
        todos:[...state.todos,{
            id: Date.now().toString(),
            description: action.payload,
            completed: false,
          }],
      };
    case DELETE_TODO:
      return { todos: [...state.todos.filter((todo) => todo.id !== action.payload)] };
    case TOGGLE_TODO:
      return {
        todos: [...state.todos.map((todo) => (todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo))],
      };
    case UPDATE_TODO:
      return {
        todos: [...state.todos.map((todo) => (todo.id === action.payload
          ? { ...todo, description: action.text }
          : todo))],
      };
    case CLEAR_COMPLETED: 
      return { todos: [...state.todos.filter((todo) => !todo.completed)] };
    default:
      return state;
  }
}
