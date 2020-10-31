import React, { useState } from "react";
import "./Todo.css";

import { IoMdCheckmarkCircleOutline, IoMdCloseCircleOutline } from "react-icons/io";

const Todo = ({ id, title, description, deleteMe }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className="todo">
      <div className="todo__content">
        <h1 className="todo__title">{title}</h1>
        <p className="todo__description">{description}</p>
      </div>
      <div className="todo__controls">
        <button className="todo__btn">
          <IoMdCheckmarkCircleOutline onClick={() => setIsCompleted(!isCompleted)} />
        </button>

        <button className="todo__btn">
          <IoMdCloseCircleOutline onClick={() => deleteMe(id)} />
        </button>
      </div>
    </div>
  );
};

export default Todo;
