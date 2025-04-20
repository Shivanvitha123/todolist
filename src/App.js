import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // For additional custom styling

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = text => setTodos([...todos, { text, isCompleted: false }]);

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <header className="bg-primary text-white py-3 text-center shadow">
        <h2>ElevateU - ToDo Application</h2>
      </header>

      <main className="container my-4 flex-grow-1">
        <div className="card shadow">
          <div className="card-body">
            <h4 className="card-title text-center mb-4">Manage Your Tasks</h4>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
          </div>
        </div>
      </main>

      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">© 2025 ElevateU | <strong>23071A05V0</strong></p>
      </footer>
    </div>
  );
}

export default App;
