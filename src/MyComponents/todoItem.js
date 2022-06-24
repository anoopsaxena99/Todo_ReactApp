//rafc
import React from "react";

export const TodoItem = ({ todo, ondelete }) => {
  return (
    <div>
      <h4>{todo.note}</h4>
      <h5>{todo.date}</h5>
      <button
        className="btn btn-danger"
        onClick={() => {
          ondelete(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
};
