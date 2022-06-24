import React from "react";
import { TodoItem } from "./todoItem";

export const Todos = (props) => {
  return (
    <div className="container" text-align="center">
      <h3 className="my-3">Todo's List</h3>
      {props.todo.length === 0 ? <h1>No more Todos To Display</h1> : ""}
      {props.todo.map((todo) => {
        return <TodoItem todo={todo} ondelete={props.ondelete} />;
      })}
    </div>
  );
};
