import React from "react";

interface Iheader {
  label: string;
}
const Header = ({ label = "Todo App" }: Iheader) => {
  return <h1>{label}</h1>;
};

export default Header;
