import './App.css';
import Photos from '../photo-feature/photos/Photos';
import { useState } from 'react';

function App() {
  const [showState, setShowState] = useState<boolean>(false)
  return (
    <div className="App">
      All Photos:
      <br />
      {
        showState && <Photos />
      }
      <br />
      <button onClick={
        () => {
          setShowState(
            (oldShowValue) => {
              return !oldShowValue
            }
          )
        }
      }>
        {showState ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}

export default App;
