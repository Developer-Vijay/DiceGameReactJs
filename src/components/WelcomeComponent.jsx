import React from 'react'
import styled from 'styled-components';

const WelcomeComponent = ({toggle}) => {
    return (
        <Container>
            <div>
            <img src='/images/dices.png' alt='diceImages'/>
            </div>
            <div className='content'>
                <h1>DiceGame</h1>
                <Button
                onClick={toggle}
                >Play Now</Button>
            </div>
        </Container>
    )
}

export default WelcomeComponent

const Container = styled.div `
max-width: 1180px;
display: flex;
margin: 0 auto;
height: 100vh;
align-items: center;

.content h1 {
    font-size: 96px;
    white-space: nowrap;
}


`


const Button = styled.button`
padding: 10px 18px;
color: white;
border-radius: 5px;
background: #000;
min-width: 220px;
font-size: 16px;
border: 1px solid transparent;
cursor: pointer;
&:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s  background ease-in;
}
`