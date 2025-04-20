import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, completeTodo, removeTodo }) => (
  <>
    {todos.map((todo, index) => (
      <TodoItem
        key={index}
        index={index}
        todo={todo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    ))}
  </>
);

export default TodoList;
