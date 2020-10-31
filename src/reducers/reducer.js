import * as actionTypes from "../actions/actionTypes";

const reducer = (todoContainer = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...todoContainer, action.payload];

    default:
      return todoContainer;
  }
};

export default reducer;
