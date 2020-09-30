import * as React from 'react'
import { connect } from 'react-redux';
import {Dispatch, AnyAction} from 'redux';

import { Header } from './Components/Header';
import  Footer  from './Components/Footer';
import ListTodo from './Components/ListTodo';
import {clearCompleted } from './store/todos/actions';
import { setFilter } from './store/filter/actions';
import { getVisibleTodos } from './selectors/index';
import { Todo, SetFilterAction, ClearCompletedTodoAction,} from './types';
import {RootState} from './store/reducers'

interface IProps {
  filter: string,
  todos: Todo[],
  todosFiltred:Todo[],
  onsetFilter: (filter:string) => SetFilterAction,
  onclearCompleted: () => ClearCompletedTodoAction,
}
const App: React.FC<IProps> = (props) => {
 const {todosFiltred, todos, filter, onsetFilter, onclearCompleted} = props
  return (
    <div className="App">
      <Header />
      <div className="App__list">
        <ListTodo
          todos={todosFiltred}
        />
        <Footer
          todos={todos}
          setFilter={onsetFilter}
          clearCompleted={onclearCompleted}
          filter={filter}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (store:RootState) => ({
  todos: store.todoReducer.todos,
  todosFiltred: getVisibleTodos(store),
  filter: store.filterReducer.filter,
});

const mapDispatchToProps = (dispatch:Dispatch<AnyAction>) => ({ 
  onsetFilter: (filter:string) => dispatch(setFilter(filter)),
  onclearCompleted: () => dispatch(clearCompleted()),
});
 

// const mapDispatchToProps = {
//   setFilter,
//   clearCompleted,
// }

export default connect(mapStateToProps, mapDispatchToProps)(App);
