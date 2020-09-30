import {
  ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO, CLEAR_COMPLETED,
} from '../constants';
import { AddTodoAction, DeleteTodoAction,ToggleTodoAction,EditDescTodoAction,ClearCompletedTodoAction } from '../../types';

export function addTodo(description: string): AddTodoAction {
  return ({
    type: ADD_TODO,
    payload: description,
  });
}

export function deleteTodo(id: string): DeleteTodoAction {
  return ({
    type: DELETE_TODO,
    payload: id,
  });
}

export function toggleTodo(id:string): ToggleTodoAction {
  return ({
    type: TOGGLE_TODO,
    payload: id,
  });
}

export function editDescTodo(id:string, text:string):EditDescTodoAction {
  return ({
    type: UPDATE_TODO,
    payload: id,
    text,
  });
}

export function clearCompleted():ClearCompletedTodoAction {
  return ({
    type: CLEAR_COMPLETED,
  });
}
