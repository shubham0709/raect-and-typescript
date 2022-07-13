import React from "react";

interface Iheader {
  label?: string;
  children?: JSX.Element | string;
}
const Header = ({ label = "Counter", children }: Iheader) => {
  return (
    <>
      <h1>{label}</h1>
      {children}
    </>
  );
};

export default Header;
