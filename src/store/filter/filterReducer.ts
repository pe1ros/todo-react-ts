import { SHOW_ALL, SET_FILTER } from '../constants';
import { FilterState,filterReducerActions } from '../../types';

const initialState: FilterState = {
  filter: SHOW_ALL,
};

export function filterReducer(state: FilterState = initialState, action:filterReducerActions):FilterState {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
