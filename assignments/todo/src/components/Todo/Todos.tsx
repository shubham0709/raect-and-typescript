import React, { useEffect, useState } from "react";
import Header from "../Header";
import TodosInput from "./TodosInput";
import TodoItem, { ItodoItem } from "./TodoItem";
import axios from "axios";

const Todos = () => {
  const [todos, setTodos] = useState<ItodoItem[]>([]);

  const getTodos = () => {
    axios
      .get("http://localhost:8080/todos")
      .then((res) => setTodos(res.data))
      .catch((e) => console.log("getting todo from server error ", e));
  };

  const addTodo = (payload: ItodoItem) => {
    payload.title.length &&
      axios
        .post("http://localhost:8080/todos", payload)
        .then((res) => getTodos())
        .catch((e) => console.log("post todo error ", e));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <Header label={"Todos"} />
      <TodosInput todos={todos} addTodo={addTodo} />
      <TodoItem todos={todos} />
    </div>
  );
};

export default Todos;
