import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import Skeleton from "./Skeleton";

const Update = () => {
  const { id } = useParams();
  const [newval, setNewVal] = useState("");
  const navigate = useNavigate();
  const [currTodo, setCurrTodo] = useState<Skeleton>({
    id: "",
    title: "",
    isCompleted: false,
  });
  const updateHandler = (payload: string) => {
    axios
      .patch(`http://localhost:8080/todos/${id}`, { title: payload })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  const getTodos = () => {
    axios
      .get(`http://localhost:8080/todos/${id}`)
      .then((res) => setCurrTodo(res.data))
      .catch((e) => console.error(e));
  };
  useEffect(() => {
    getTodos();
  }, [currTodo]);

  return (
    <div>
      <Header label={`Update todo ID : ${id}`}></Header>
      <Header label={`${currTodo.title}`}></Header>
      <input
        placeholder="type-here..."
        onChange={(e) => setNewVal(e.target.value)}
      />
      <button onClick={() => updateHandler(newval)}>Update</button>
    </div>
  );
};

export default Update;
