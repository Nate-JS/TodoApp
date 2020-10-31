import React, { useState } from "react";
import "./TodoList.css";

import Todo from "../Todo/Todo";

const TodoList = () => {
  const [todoContainer, setTodoContainer] = useState([
    <Todo title={"title"} description={"Lorem;alsdkalsdk;lasdlkasld;kl;asdl;asdl;k;asldkl;sdk;sldksadk;d"} />,
  ]);

  const addTodo = (title, description) =>
    setTodoContainer([...todoContainer, <Todo title={title} description={description} />]);

  return <div className="todoList">{todoContainer.map(todo => todo)}</div>;
};

export default TodoList;
