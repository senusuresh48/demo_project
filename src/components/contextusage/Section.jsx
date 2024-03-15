import Ralewayttf from './fonts/Raleway-Regular.ttf';
import { ThemeProvider,createTheme } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
function Section(){
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
      
      
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              fontFamily: 'Raleway',
            }}
          >
            Raleway
          </Box>
        </ThemeProvider>
      );      

}

export default Section
