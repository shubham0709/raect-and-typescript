import React from "react";

interface Ibutton {
  updateCount: (val: number) => void;
  label: string;
  val: number;
}

const Button = ({ updateCount, label, val }: Ibutton) => {
  return <button onClick={() => updateCount(val)}>{label}</button>;
};

export default Button;
