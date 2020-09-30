import { ADD_TODO, CLEAR_COMPLETED, DELETE_TODO,TOGGLE_TODO, UPDATE_TODO } from './store/constants'

export interface Todo {
  id: string,
  description: string,
  completed: boolean
}
export type AddTodoAction = {
  type: typeof ADD_TODO,
  payload: string,
}

export type DeleteTodoAction = {
  type: typeof DELETE_TODO,
  payload: string,
} 

export type ToggleTodoAction = {
  type: typeof TOGGLE_TODO,
  payload: string,
} 

export type EditDescTodoAction = {
  type: typeof UPDATE_TODO,
  payload: string,
  text:string
} 

export type ClearCompletedTodoAction = {
  type: typeof CLEAR_COMPLETED, 
}

export type  SetFilterAction = {
  type: string,
  payload: string,
}

export type toDoReducerActions = AddTodoAction | DeleteTodoAction | ToggleTodoAction | EditDescTodoAction | ClearCompletedTodoAction;

export type filterReducerActions = SetFilterAction

 
export type TodoState = {
  todos: Todo[],
}
export type FilterState = {
  filter: string,
}  