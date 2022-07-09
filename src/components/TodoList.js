import React from 'react'
import Todo from './Todo';

export const TodoList = ({todos,setTodos}) => {
  return (
    <div className="todo-container">
    <ul className="todo-list">
       {todos.map(todo =>(
        <Todo setTodos={setTodos} todos={todos} text = {todo.text} key = {todo.id} todo={todo} />
       ))}
    </ul>
  </div>

  );
}
