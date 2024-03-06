import React from "react";
import Login from "../Login";
import { useState } from "react";
import { Button } from "@mui/material";

const LoginForm = ({senu}) =>{  
    const [data,setData] = useState(10);

        return (
            <>
            <h1>Login Form = {senu}</h1>
            <button>Click me</button>
            </>
        )
}
export default LoginForm;