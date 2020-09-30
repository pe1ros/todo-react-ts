import * as React from 'react'; 
import classNames from 'classnames';
import '../styles.scss'; 
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../store/constants';
import {Todo} from '../types'
import {SetFilterAction, ClearCompletedTodoAction} from '../types'

interface IProps {
  filter: string,
  todos: Todo[],
  setFilter: (filter: string) => SetFilterAction,
  clearCompleted: () => ClearCompletedTodoAction,
}

const Footer: React.FC<IProps> = (props) => {
  const { filter, todos, setFilter, clearCompleted } = props; 

  const changeFilter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e.currentTarget.innerText === 'All') {
      setFilter(SHOW_ALL);
    }
    if (e.currentTarget.innerText === 'Active') {
      setFilter(SHOW_ACTIVE);
    }
    if (e.currentTarget.innerText === 'Completed') {
      setFilter(SHOW_COMPLETED);
    }
  };
  const clearAllCompleted = () => {
    clearCompleted();
  };
  function getItemsStatus(list:Todo[], flag:boolean) {
    const listItems = list.filter((item) => item.completed === flag);
    return listItems.length;
  }
  let countCheckedTodo = React.useMemo(
    ()=>
      todos.filter((todo)=>{
        return todo.completed === true ? todo : ''
      }),
      [todos]
  );
 
  const showFooter = classNames('Footer', {'Footer--hideFooter':!todos.length});
  const borderFilter = classNames('Footer__filter--borderFilter');
  const clearItems = classNames({ 'Footer__clearitems--none': !countCheckedTodo.length });
  const itemsLeft = getItemsStatus(todos, false);
  const completedItems = getItemsStatus(todos, true);
  return (
    <div className={showFooter}>
      <div className="Footer__spanitems">
        <span>
          {itemsLeft}
          {' '}
          items left
        </span>
      </div>
      <div className="Footer__filter"> 
        <button
          type="button"
          style={{border:filter === SHOW_ALL ? '1px solid' : ''}}
          onClick={changeFilter}
        >
          All
        </button>
        <button
          type="button"
          style={{border:filter === SHOW_ACTIVE ? '1px solid' : ''}}
          onClick={changeFilter}
        >
          Active
        </button>
        <button
          type="button"
          style={{border:filter === SHOW_COMPLETED ? '1px solid' : ''}}
          onClick={changeFilter}
        >
          Completed
        </button>
      </div>
      <div className="Footer__clearitems">
        <button
          type="button"
          className={clearItems}
          onClick={clearAllCompleted}
        >
          Clear completed [
          {completedItems}
          ]
        </button>
      </div>
    </div>
  );
}

export default Footer;
