import { useState } from 'react';
import './App.css';
import WelcomeComponent from './components/WelcomeComponent';
import GamePlay from './components/GamePlay';

function App() {

  const [isGameStarted, setGameStarted]=useState(true);

  const toggleGamePlay=()=>{
   setGameStarted((prev)=> !prev);
  };

  return (
    <div>
      {
        isGameStarted ? <GamePlay/> :  <WelcomeComponent toggle={toggleGamePlay}/>
      }
   
    </div>
   
  );
}

export default App;
