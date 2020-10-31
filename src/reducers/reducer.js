import * as actionTypes from "../actions/actionTypes";

const reducer = (todoContainer = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...todoContainer, action.payload];

    case actionTypes.DELETE_TODO:
      const todoContainerCopy = [...todoContainer];

      // This variable stores the index of the todo that will be deleted
      let todoIndex;

      // Looking for the todo's index
      for (const index in todoContainerCopy) {
        if (todoContainerCopy.hasOwnProperty(index)) {
          const todo = todoContainerCopy[index];

          if (todo.id === action.payload.id) todoIndex = index;
        }
      }

      // Deleting the todo by its index
      if (todoIndex) delete todoContainerCopy[todoIndex];

      // Returning modified `todoContainer`
      return todoContainerCopy;

    default:
      return todoContainer;
  }
};

export default reducer;
