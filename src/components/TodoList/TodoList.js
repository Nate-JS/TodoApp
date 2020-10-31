import React from "react";
import "./TodoList.css";

import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoContainer = useSelector(state => state);

  return (
    <div className="todoList">
      {todoContainer.map(todo => (
        <Todo key={todo.id} id={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
};

export default TodoList;
