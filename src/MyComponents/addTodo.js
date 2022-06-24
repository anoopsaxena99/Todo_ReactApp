import React from "react";

export const AddTodo = () => {
  return (
    <div className="container my-3">
      <h3>Add your Task !!</h3>
      <form>
        <div class="mb-3">
          <label for="title" class="form-label">
            Todo
          </label>
          <input
            type="text"
            id="todo"
            aria-describedby="emailHelp"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="title" class="form-label">
            Date
          </label>
          <input type="text" id="date" class="form-control" />
        </div>
        <button type="submit" class="btn btn-sm btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};
