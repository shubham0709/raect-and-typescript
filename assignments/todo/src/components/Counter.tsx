import React, { useState } from "react";
import Header from "./Header";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = (val: number) => {
    setCount(count + val);
  };
  return (
    <div>
      <Header />
      <Header label={""}>
        <h3>My counter App</h3>
      </Header>
      <Header>passing normal text in header as children</Header>
      <Header label={`${count}`} />
      <Button label="Reduce" handleClick={() => handleClick(-1)} />
      <Button label="Add" handleClick={() => handleClick(1)} />
    </div>
  );
};

export default Counter;
