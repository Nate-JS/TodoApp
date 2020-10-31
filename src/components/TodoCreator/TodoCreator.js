import React, { useState } from "react";

import { IoIosAddCircleOutline } from "react-icons/io";

import { useDispatch } from "react-redux";

import { addTodo } from "../../actions/actions";

const TodoCreator = () => {
  const [todoCount, setTodoCount] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const dispactchTodo = () => {
    if (!title && !description) return;

    dispatch(addTodo(todoCount, title, description));

    setTodoCount(todoCount + 1);
  };

  const clearFields = () => {
    setTitle("");
    setDescription("");
  };

  return (
    <div className="todoCreator">
      <label>Title</label>
      <input className="todoCreator__title" type="text" onInput={event => setTitle(event.target.value)} value={title} />

      <label>Description</label>
      <textarea
        className="todoCreator__description"
        onInput={event => setDescription(event.target.value)}
        value={description}
      ></textarea>

      <button
        className="todoCreator__btn"
        onClick={() => {
          dispactchTodo();
          clearFields();
        }}
      >
        <IoIosAddCircleOutline />
      </button>
    </div>
  );
};

export default TodoCreator;
