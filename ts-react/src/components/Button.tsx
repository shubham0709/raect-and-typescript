import React from "react";

interface btnProps {
  label: string;
  handleClick: () => void;
}
const Button = (props: btnProps) => {
  let { label, handleClick } = props;
  return <button onClick={handleClick}>{label}</button>;
};

export default Button;
