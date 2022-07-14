import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Todo from "./components/Todo";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/update/:id" element={<Update />} />
        <Route path="/" element={<Todo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
