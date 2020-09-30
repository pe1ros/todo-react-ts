import * as React from 'react'
import '../styles.scss';
import ListItem from './ListItem';
import AddTodo from './AddTodo';
import { Todo } from '../types';

interface IProps{
  todos: Todo[], 
}

const ListTodo: React.FC<IProps> = (props) => { 
  const {todos} = props
  return (
    <div className="listTodo">
      <AddTodo />

      {todos && todos.map((todo, index) => (
        <ListItem
          // eslint-disable-next-line react/no-array-index-key
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default ListTodo;