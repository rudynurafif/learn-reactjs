import * as React from 'react'
import Button from '@mui/material/Button'
import './App.css';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Typography color="primary" variant="h2">Learning Material UI</Typography>
      <Button color="primary" variant="contained">Primary</Button>
      <Button color="secondary" variant="outlined">Secondary</Button>
    </div>
  );
}

export default App;
