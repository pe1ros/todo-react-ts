import * as React from 'react'
import  { useState } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux'; 
import { deleteTodo, toggleTodo, editDescTodo } from '../store/todos/actions';
import '../styles.scss';
import { Todo, DeleteTodoAction,ToggleTodoAction,EditDescTodoAction, TodoState,toDoReducerActions } from '../types';
import { Dispatch } from 'redux';

interface IProps{
  todo: Todo,
  ondeleteTodo:(id:string) => DeleteTodoAction, 
  ontoggleTodo:(id:string) =>  ToggleTodoAction ,
  oneditDescTodo:(id:string, text:string) => EditDescTodoAction,

}

const ListItem: React.FC<IProps> = (props) => { 
  const { todo, ondeleteTodo, ontoggleTodo, oneditDescTodo } = props
  const [newDesc, setNewDesc] = useState(todo.description || '');
  const [modalOpen, setModalOpen] = useState(false);

  const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setNewDesc(event.target.value);
  };

  const deleteHandler = () => {
    ondeleteTodo(todo.id);
  };

  const toggleHandler = () => {
    ontoggleTodo(todo.id);
  };

  const editModalHandler = () => {
    setModalOpen(!modalOpen);
  };

  const saveModalHandler = () => {
    oneditDescTodo(todo.id, newDesc);
    setModalOpen(!modalOpen);
  };

  let classNameDesc = 'listItem__description';

  if (todo.completed) {
    classNameDesc += ' listItem__description--completed ';
  }
  const editMode = classNames({' editMode': !modalOpen });
  const notEditMode = classNames({' notEditMode': modalOpen });
  const completedTask = classNames({'listItem--completed': !todo.completed });

  return (
    <div className="listItem">
      <input type="checkbox" checked={todo.completed} onChange={toggleHandler} />
      <i className={completedTask}> &#10004;</i>
      <div
        onDoubleClick={editModalHandler}
        className={classNameDesc + notEditMode} 
      >
        {todo.description}
      </div>
      <input
        type="text"
        name="newDesc"
        className={"listItem__inputmodal" + editMode}
        value={newDesc}
        onChange={changeHandler} 
      />
      <button
        type="button"
        className={"listItem__inputmodal--btnsave" + editMode}
        onClick={saveModalHandler} 
      >
        Save
      </button>
      <button
        type="button"
        className={"listItem__inputmodal--btnclose" + editMode}
        onClick={editModalHandler} 
      >
        Cancel
      </button>
      <button
        type="button"
        className= {"listItem__btnclose" + notEditMode}
        onClick={deleteHandler} 
      >
        X
      </button>
    </div>
  );
};
const mapStateToProps = (store:TodoState) => ({
  todos: store.todos,
});
const mapDispatchToProps = (dispatch:Dispatch<toDoReducerActions>) => ({
  ondeleteTodo: (id:string) => dispatch(deleteTodo(id)),
  ontoggleTodo: (id:string) => dispatch(toggleTodo(id)),
  oneditDescTodo: (id:string, text:string) => dispatch(editDescTodo(id, text)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
