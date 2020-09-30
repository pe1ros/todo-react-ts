import { SET_FILTER } from '../constants';
import { SetFilterAction } from '../../types';

export function setFilter(filter:string):SetFilterAction {
  return ({
    type: SET_FILTER,
    payload: filter,
  });
}
