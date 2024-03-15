import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { useFormik } from "formik"; // useFormik
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import Ralewayttf from './fonts/Raleway-Regular.ttf';


const initialValues={
  email: "",  
  password: "",
  showPassword:false,

}
const theme = createTheme({
  typography: {
    fontFamily: 'Raleway, Arial',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 600;
          src: local('Raleway'), local('Raleway-Regular'), url(${Ralewayttf}) format('truetype');
          
        }
      `,
    },
  },
  
});



const validate=values=>{
  let errors={}

  if(!values.email){
    errors.email=<Typography variant='body2' color='error'>Field Required</Typography>
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      errors.email=<Typography variant='body2' color='error'>Invaild Form Format</Typography>
  }
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if(!passwordRegex.test(values.password)){
    errors.password=<Typography variant='body2' color='error'>Password must contain at least one uppercase letter, one lowercase letter, one digit,one special character and be at least 8 characters long</Typography>
  }


  return errors
  
}
const defaultTheme = createTheme();

function SignInSide() {
  const navigate = useNavigate();
  
  const handleSubmit = values=>{
   console.log("Form data",values)
    navigate('/newpage');
  }

  const formik = useFormik({
    initialValues,
    onSubmit : handleSubmit,
    validate
  });
  const handleTogglePasswordVisibility = () => {
    formik.setFieldValue('showPassword', !formik.values.showPassword);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh'}} >
        <CssBaseline />

        <Grid item xs={12} sm={6} md={6}  elevation={6} sx={{}} >
          <Box
            sx={{
              my: 20,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              fontFamily:'Raleway',
              flexWrap:'wrap',
              alignContent:'center'
            }}
          >
            <Typography component="h1" variant="h5" style={{  fontFamily:'Raleway',fontWeight: 'bold'}} >
              Welcome Back
            </Typography>
            <Typography  variant="body1" sx={{fontFamily:'Raleway',mb:3}} >
              Sign in to continue
            </Typography>
            <Box component="form" onSubmit={handleSubmit}sx={{ mt: 0 }}>
              <Typography variant='body1' style={{fontFamily:'Raleway',fontWeight:'bold'}}>User Name</Typography>
              <TextField
                error={formik.touched.email && Boolean(formik.errors.email) }
                margin="normal"
                id="email"
                fullWidth
                label={<Typography variant='body2'sx={{fontFamily:'Raleway'}}>Email Address*</Typography> }
                name="email"
                autoComplete="email"
                sx={{fontFamily:'Raleway'}}
                size='small'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                
              />
              <br/>
              {formik.touched.email && formik.errors.email?<div>{formik.errors.email}</div>:null}
              <Typography variant='body2' style={{fontFamily:'Raleway',fontWeight:'bold'}}>Password</Typography>
              <TextField
                error={formik.touched.password && Boolean(formik.errors.password)}
                margin="normal"
                name="password"
                fullWidth
                label={<Typography sx={{fontFamily:'Raleway',}}variant='body2'>Password*</Typography> }
                type={formik.values.showPassword ? 'text' : 'password'}
                id="password"
                size='small'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" margin="dense">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleTogglePasswordVisibility}
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        {formik.values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <br/>
              {formik.touched.password && formik.errors.password?<div>{formik.errors.password}</div>:null}
              <Button
                type='submit'
                variant="contained"
                fullWidth
                size='medium'
                sx={{ fontFamily:'Raleway',mt: 5, mb: 1 ,pl:10,pr:10}}
                onClick={formik.handleSubmit}
              >
                Sign In
              </Button>       
            </Box>
          </Box>
        </Grid>
        
        <Grid
          item
          xs={0}
          sm={6}
          md={6}
          sx={{
            flexWrap:'wrap',
            
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor:'#e1f5fe',
            // backgroundColor: (t) =>
            // t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: '75% 50%',
            backgroundPosition: 'center',
            
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
export default SignInSide