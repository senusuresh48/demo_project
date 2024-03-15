import React, { useState } from "react";
const LoginForm = ({ senu, onButtonClick }) => {
  const [data, setData] = useState(10);

  const onClick = () => {
    onButtonClick(data);
  };
  return (
    <>
      <h1>Login Form = {senu}</h1>
      <button onClick={onClick}>Click me</button>
    </>
  );
};

export default LoginForm;