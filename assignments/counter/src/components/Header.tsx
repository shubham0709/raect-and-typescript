import React from "react";

interface Ilabel {
  label?: string;
}

const Header = ({ label = "Counter" }: Ilabel) => {
  return <h1>{label}</h1>;
};

export default Header;
