import React from "react";

export interface ItodoItem {
  id?: number;
  title: string;
  isCompleted: boolean;
}

interface ItodoItemProps {
  todos: ItodoItem[];
}

const TodoItem = ({ todos }: ItodoItemProps) => {
  return (
    <div>
      {todos.map((elem, i) => (
        <div key={elem.id}>
          <span>{elem.id}</span>
          <span>{elem.title}</span>
          <span>{elem.isCompleted}</span>
        </div>
      ))}
    </div>
  );
};

export default TodoItem;
