import React from 'react';
import { observer } from 'mobx-react-lite';
import TodoState from '../store/TodoState';

const Todo = observer(() => (

  <div>
    {TodoState.todos.map(todo => (
      <div 
        className="todo-item"
        style={ { border: '1px solid #ccc', padding: '5px 10px', margin: '5px 10px'} } 
        key={todo.id}
      >
        <input 
          type="checkbox" 
          checked={todo.completed}
          onChange={ () => TodoState.completeTodo(todo.id) }
        />
        <p>{todo.title}</p>
        <button onClick={ () => TodoState.removeTodo(todo.id) }>X</button>
      </div>
    ))}
  </div>
));

export default Todo;