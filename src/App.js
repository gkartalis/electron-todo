import "./App.css";
import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn about React", isCompleted: false },
    { text: "Meet friend for lunch", isCompleted: false },
    { text: "Build really cool todo app", isCompleted: false },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>To Do list</p>
        <TodoForm addTodo={addTodo} />
        {todos.length > 0 && (
          <div>
            <ul>
              {todos.map((todo, index) => {
                return (
                  <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo}
                  />
                );
              })}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
