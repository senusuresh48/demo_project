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
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor:'#ffffff',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
export default SignInSide
