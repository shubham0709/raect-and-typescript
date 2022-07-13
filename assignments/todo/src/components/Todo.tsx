import React, { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import Header from "./Header";
import TodoInput from "./Todoinput";
import { TodoItem } from "./TodoItem";
import axios from "axios";

const Todo = () => {
  const [todos, setTodos] = useState<Skeleton[]>([]);
  const addTodo = (payload: Skeleton) => {
    axios
      .post("http://localhost:8080/todos", payload)
      .then((res) => getTodos())
      .catch((e) => console.error(e));
    setTodos([...todos, payload]);
  };

  const getTodos = () => {
    axios
      .get("http://localhost:8080/todos")
      .then((res) => setTodos(res.data))
      .catch((e) => console.error(e));
  };

  const deleteTodo = (id: string) => {
    axios
      .delete(`http://localhost:8080/todos/${id}`)
      .then((res) => getTodos())
      .catch((e) => console.error(e));
  };

  const toggleStatus = (payload: Skeleton) => {
    payload.isCompleted = !payload.isCompleted;
    let id = payload.id;
    axios
      .patch(`http://localhost:8080/todos/${id}`, payload)
      .then((res) => getTodos())
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <Header label={"Todo Application"} />
      <TodoInput addTodo={addTodo}></TodoInput>
      <TodoItem
        todos={todos}
        deleteTodo={deleteTodo}
        toggleStatus={toggleStatus}
      />
    </div>
  );
};

export default Todo;
