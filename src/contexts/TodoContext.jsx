import React, { useState, createContext } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = { id: todos.length, title: title, done: false };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todo) => {
    const index = todos.indexOf(todo);
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
