import './App.scss';
import { useState } from 'react';
import SquaresHolder from './components/SquaresHolder';
import ModePicker from './components/ModePicker';

function App() {
  const [mainState, setMainState] = useState(5);

  const handleCallback = (childData) => {
    setMainState(childData);
  };

  return (
    <div className="main-wrap">
      <div>
        <ModePicker getCount={handleCallback} />
        <SquaresHolder squareCount={mainState} />
      </div>
    </div>
  );
}

export default App;
