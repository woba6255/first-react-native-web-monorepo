import React from "react";
import { ButtonAtom } from "./button.atom"

const Button = ({ onClick, children }) => {
  return <ButtonAtom onClick={onClick}>{children}</ButtonAtom>;
};

export default Button;
