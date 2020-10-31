import React from "react";
import "./App.css";
import TodoCreator from "./components/TodoCreator/TodoCreator";

import TodoList from "./components/TodoList/TodoList";

const App = () => {
  return (
    <div className="app">
      <TodoCreator />
      <TodoList />
    </div>
  );
};

export default App;
