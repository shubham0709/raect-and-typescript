import React, { useState } from "react";
import Header from "./Header";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const updateCount = (val: number) => {
    setCount(count + val);
  };

  return (
    <div>
      <Header />
      <Header label={`${count}`} />
      <Button val={-1} label="Reduce" updateCount={updateCount} />
      <Button val={1} label="Add" updateCount={updateCount} />
    </div>
  );
};

export default Counter;
