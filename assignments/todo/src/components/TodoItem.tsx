import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "./Skeleton";

interface TodoItemProps {
  todos: Skeleton[];
  deleteTodo: (id: string) => void;
  toggleStatus: (payload: Skeleton) => void;
  updateTodo: (payload: Skeleton) => void;
}

export const TodoItem = ({
  todos,
  deleteTodo,
  toggleStatus,
  updateTodo,
}: TodoItemProps) => {
  console.log(todos);
  return (
    <div>
      {todos.length > 0 &&
        todos.map((elem) => (
          <div key={elem.id}>
            <span>{elem.title}</span>
            <button onClick={() => deleteTodo(elem.id)}>delete</button>
            <button onClick={() => toggleStatus(elem)}>
              {elem.isCompleted ? "mark pending" : "mark as done"}
            </button>
            <Link to={`/update/${elem.id}`}>Update Todo</Link>
          </div>
        ))}
    </div>
  );
};
