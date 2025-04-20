import React from "react";

const TodoItem = ({ todo, index, completeTodo, removeTodo }) => (
  <div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
    {todo.text}
    <button onClick={() => completeTodo(index)}>✓</button>
    <button onClick={() => removeTodo(index)}>🗑️</button>
  </div>
);

export default TodoItem;
