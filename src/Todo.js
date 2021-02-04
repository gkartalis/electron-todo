import React from "react";

function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <div style={{ textDecoration: todo.isCompleted && "line-through" }}>
      {todo.text}
      <button onClick={() => completeTodo(index)}>
        {todo.isCompleted ? "Uncheck" : "Check"}
      </button>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
}

export default Todo;
