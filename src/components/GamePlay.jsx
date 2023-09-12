import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import { styled } from 'styled-components'
import RoleDice from './RoleDice'

const GamePlay = () => {

  const [score,setScore]=useState(0);
  const [selectedNumber,setSelectedNumber] = useState();
  const [currentDice,setCurrentDice]= useState(1);

  const [error,setError]=useState("");


    const generateRandomNumber= (min,max)=> {
      return  Math.floor (Math.round(Math.random() * (max-min)) + min);
    };
  
    const roleDice=() => {
      if(!selectedNumber)
      {
        setError("You have not selected any number");
        return;
      }

      const randomNumber=generateRandomNumber(1,6);
      console.log(randomNumber);
     setCurrentDice((prev)=> randomNumber);


     if(selectedNumber===randomNumber)
     {
      setScore((prev)=> prev+randomNumber)
     }
     else{
      setScore((prev)=> prev-2);
     }

     setSelectedNumber(undefined);
    }

  return (
   <MainContainer>
    <div className='top_section'>
    <TotalScore TotalScore={score}/>
   <NumberSelector selectedNumber={selectedNumber} 
   setSelectedNumber={setSelectedNumber}
   error={error}
    setError={setError}/>
    </div>
    <RoleDice currentDice={currentDice}
     roleDice={roleDice}/>
    <div>
  

    </div>
 
   </MainContainer>
  )
}

export default GamePlay
 

const MainContainer=styled.main`
padding-top: 70px;
.top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
}



`
;