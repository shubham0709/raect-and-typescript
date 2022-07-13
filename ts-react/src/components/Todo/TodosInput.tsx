import React, { useState } from "react";
import { ItodoItem } from "./TodoItem";

interface ItodoInputProps {
  todos: ItodoItem[];
  addTodo: (payload: ItodoItem) => void;
}
const TodosInput = ({ todos, addTodo }: ItodoInputProps) => {
  const [newData, setNewData] = useState("");
  const addTodoHandler = () => {
    addTodo({
      title: newData,
      isCompleted: false,
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="type here..."
        onChange={(e) => setNewData(e.target.value)}
      />
      <button onClick={() => addTodoHandler()}>Add</button>
    </div>
  );
};

export default TodosInput;
