import * as actionTypes from "./actionTypes";

const addTodo = (id, title, description, completed = false) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: {
      id,
      title,
      description,
      completed,
    },
  };
};

const deleteTodo = id => {
  return {
    type: actionTypes.DELETE_TODO,
    payload: {
      id,
    },
  };
};
