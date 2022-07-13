import React, { useState } from "react";
import Header from "./Header";
import Skeleton from "./Skeleton";

interface ItodoInputProps {
  addTodo: (payload: Skeleton) => void;
}

const TodoInput = ({ addTodo }: ItodoInputProps) => {
  const [data, setData] = useState("");
  return (
    <div>
      <Header label={"todo i/p"} />
      <input
        placeholder="type here..."
        onChange={(e) => setData(e.target.value)}
      />
      <button
        onClick={() =>
          addTodo({
            id: Math.random() * Math.random() * Math.random() + "",
            title: data,
            isCompleted: false,
          })
        }
      >
        ADD
      </button>
    </div>
  );
};

export default TodoInput;
