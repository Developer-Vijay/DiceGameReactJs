import React from 'react'
import styled from 'styled-components'
import CustomButton from './CustomButton'

const RoleDice = ({currentDice,roleDice}) => {




  return (
    <DiceController>
        <div className='dice' onClick={roleDice}>
            <img src={`/images/dice_${currentDice}.png`} alt="dice 1 " />
        </div>
        <p>Click On Dice to roll</p>
      <CustomButton/>
    </DiceController>
  )
}

export default RoleDice

const DiceController=styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;

p{
    font-size: 24px;
}

.dice{
  cursor: pointer;
}

`;