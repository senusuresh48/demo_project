import './login.css';
import LoginForm from './components/LoginForm';
import React from 'react';
const Login = (data) =>{
    const [value,setValue] =React.useState(5);

    return (
        <div >
            Login Page = 
            <LoginForm senu={value}/>
        </div>
    )
}

export default Login;
