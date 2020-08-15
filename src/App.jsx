import React from "react";
import TodoProvider from "./contexts/TodoContext";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

const App = () => {
  return (
    <TodoProvider>
      <TodoList></TodoList>
      <hr />
      <AddTodo></AddTodo>
    </TodoProvider>
  );
};

export default App;
