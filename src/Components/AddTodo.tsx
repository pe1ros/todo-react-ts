import * as React from 'react'; 
import  { useState } from 'react';
import '../styles.scss'; 
import { connect } from 'react-redux';
import { addTodo } from '../store/todos/actions';
import { AddTodoAction, toDoReducerActions} from '../types'
import { Dispatch } from 'redux';

interface IProps {
  onAddTodo: (description:string) => AddTodoAction
}

const AddTodo: React.FC<IProps> = (props) => {
  const [description, setDescription] = useState('');

  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setDescription( e.target.value );
  }

  const submitHandler = (e:React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    props.onAddTodo(description);
    setDescription('');
  }
 
    return (
      <div>
        <form className="AddTodo" action="submit" onSubmit={submitHandler}>
          <input
            type="text"
            name="description"
            placeholder="What needs to be done?"
            onChange={changeHandler}
            value={description}
          />
        </form>
      </div>
    ); 
}

const mapDispatchToProps = (dispatch:Dispatch<toDoReducerActions>) => ({
  onAddTodo: (description:string) => dispatch(addTodo(description)),

}); 

export default connect(null, mapDispatchToProps)(AddTodo);
