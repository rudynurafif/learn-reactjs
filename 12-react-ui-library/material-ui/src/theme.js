import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#4ABAD1',
      light: '#6ec7da',
      dark: '#338292',
      contrastText: '#fff'
    },
    secondary: {
      dark: '#a8721f',
      main: '#f0a42d',
      light: '#f3b657',
      contrastText: '#fff'
    }
  }
})

export default theme