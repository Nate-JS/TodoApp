import * as actionTypes from "../actions/actionTypes";

const reducer = (todoContainer = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...todoContainer, action.payload];

    case actionTypes.DELETE_TODO:
      // This variable stores the index of the todo that will be deleted
      let todoIndex;

      // Looking for the todo and taking its index
      for (const index in todoContainer) {
        if (todoContainer.hasOwnProperty(index)) {
          const todo = todoContainer[index];
          if (todo.id === action.payload.id) todoIndex = index;
        }
      }

      // Get out if there is no item with such an index
      if (todoIndex == null && todoIndex <= -1) return todoContainer;

      // Creating a copy of the `todoContainer`
      let todoContainerCopy = [...todoContainer];

      // Deleting that specific todo
      todoContainerCopy.splice(todoIndex, 1);

      // Returning a new version of the `todoContainer`
      return todoContainerCopy;

    default:
      return todoContainer;
  }
};

export default reducer;
