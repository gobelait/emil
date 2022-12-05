import logo from './logo.svg';
import './App.css';
import ImageDisplay from './ImageDisplay';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      {/* <Typography
        variant='h1'
      >
        La galerie de 1000
      </Typography> */}
      <ImageDisplay />
    </div>
  );
}

export default App;
