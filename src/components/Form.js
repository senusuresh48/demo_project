/*import React from "react";
import { useFormik } from "formik"; // useFormik
import Button from '@mui/material/Button';
import {Grid} from "@mui/material";
import { TextField ,Container} from "@mui/material";

const initialValues={
  name: "",
  email: "",
}

const onSubmit = values=>{
  console.log("Form data",values)
}

const validate=values=>{
  let errors={}

  if(!values.name){
    errors.name='Field is Required'
  }
  
  if(!values.email){
    errors.email='Field is Required'
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      errors.email='Invaild Form Format'
  }

  return errors
  
}

function Form() {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  console.log("Visited Fields", formik.touched);
  return (
    <div>
      <Container><Grid alignItems='center'>
      <h1>Welcome Again</h1>
      <h4>Sign in to Continue</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <TextField
          label ="Enter your name"
          variant="outlined"
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name
          }
        />
        {formik.touched.name && formik.errors.name?<div>{formik.errors.name}</div>:null}
        <label htmlFor="email">Email:</label>
        <TextField
          label ="Enter your email"
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email?<div>{formik.errors.email}</div>:null}
        <Button variant="contained" href="/nextpage" color='error'>
             Sign In
      </Button>
     
      </form>
      </Grid>
      
     
    </Container>
    </div>
  );
}
export default Form;
*/

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { useFormik } from "formik"; // useFormik
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const initialValues={
  email: "",
  password: "",

}

const onSubmit = values=>{
  console.log("Form data",values)
}

const validate=values=>{
  let errors={}

  if(!values.email){
    errors.email='Field is Required'
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      errors.email='Invaild Form Format'
  }
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if(!passwordRegex.test(values.password)){
    errors.password=<Typography variant='body2'>Password must contain at least one <br/>uppercase letter, one lowercase letter,<br/> one digit, and be at least 8 characters long</Typography>
  }


  return errors
  
}
const defaultTheme = createTheme();

function SignInSide() {
  
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh'}} >
        <CssBaseline />

        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square >
          <Box
            sx={{
              my: 24,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              ml:20
            }}
          >
            <Typography component="h1" variant="h6" style={{ fontWeight: 'bold'}} >
              Welcome Back
            </Typography>
            <Typography component="h1" variant="body2"  >
              Sign in to continue
            </Typography>
            <Box component="form"  onSubmit={onSubmit} sx={{ mt: 2 }} minWidth={300}>
              <TextField
                margin="normal"
                id="email"
                label={<Typography variant='body2'>Email Address*</Typography> }
                name="email"
                autoComplete="email"
                size='medium'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                autoFocus
              />
              <br/>
              {formik.touched.email && formik.errors.email?<div>{formik.errors.email}</div>:null}
              <TextField
                margin="normal"
                width="150"
                name="password"
                label={<Typography variant='body2'>Password*</Typography> }
                type="password"
                id="password"
                size='medium'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                autoComplete="current-password"
              />
              <br/>
              {formik.touched.password && formik.errors.password?<div>{formik.errors.password}</div>:null}
              <Button
                variant="contained"
                size='medium'
                href="/nextpage"
                sx={{ mt: 5, mb: 1 ,pl:10,pr:10}}
                disabled={!formik.isValid}
              >
                Sign In
              </Button>
              
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: 'url(https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
export default SignInSide
