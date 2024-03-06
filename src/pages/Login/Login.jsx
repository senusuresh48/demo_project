import React from "react";
import LoginForm from './components/LoginForm';

const Login = () => {
  const [value, setValue] = React.useState(5);
  const [val, setVal] = React.useState("");

  const handleButtonClick = (data) => {
    setVal(data);
  };

  return (
    <div>
      <LoginForm senu={value} onButtonClick={handleButtonClick} />
      <h1>{val}</h1>
    </div>
  );
};

export default Login;