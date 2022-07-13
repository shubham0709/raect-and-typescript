import React, { useState } from "react";
import Header from "./Header";

const Counter = () => {
  const [count, setCount] = useState(0);

  const updateCount = (val: number) => {
    setCount(count + val);
  };

  return (
    <div>
      <Header />
      <Header label={`${count}`} />
      <button onClick={() => updateCount(-1)}>Reduce</button>
      <button onClick={() => updateCount(1)}>Add</button>
    </div>
  );
};

export default Counter;
