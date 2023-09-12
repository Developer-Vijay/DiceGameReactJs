import React from 'react'
import styled from 'styled-components'

const CustomButton = () => {
  return (
   

   <ButtonContainer>
      <button>
    Reset Score
  </button>
  <div>

  <button className='white-button'>
   Show Rules
  </button>
  </div>
   </ButtonContainer>
  )
}

export default CustomButton

const ButtonContainer =styled.div `
button {
background-color:black;
color: white;
cursor: pointer;
margin-top:20px;
border: 0 solid black;
border-radius: 5px;
font-size: 16px;
font-weight: 600;
align-items: center;
width: 220px;
height: 44px;
} 
.white-button{ 
background-color:white;
margin-top:20px;
cursor: pointer;
color: black;
border: 1px solid black;
border-radius: 5px;
font-size: 16px;
font-weight: 600;
align-items: center;
width: 220px;
height: 44px;
}
`


