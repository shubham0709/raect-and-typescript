import React from "react";
import Skeleton from "./Skeleton";

interface TodoItemProps {
  todos: Skeleton[];
  deleteTodo: (id: string) => void;
  toggleStatus: (payload: Skeleton) => void;
}

export const TodoItem = ({
  todos,
  deleteTodo,
  toggleStatus,
}: TodoItemProps) => {
  console.log(todos);
  return (
    <div>
      {todos.length > 0 &&
        todos.map((elem) => (
          <div key={elem.id || Math.floor(Math.random())}>
            <span>{elem.title}</span>
            <span>{"---"}</span>
            <span>{elem.isCompleted ? "true" : "false"}</span>
            <button onClick={() => deleteTodo(elem.id)}>delete</button>
            <button onClick={() => toggleStatus(elem)}>
              {elem.isCompleted ? "mark pending" : "mark as done"}
            </button>
          </div>
        ))}
    </div>
  );
};
