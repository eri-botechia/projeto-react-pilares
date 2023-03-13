import styled from "styled-components"; 
import App from './../../../../App';

export const ButtonOrderCtn = styled.div`
display: flex;
flex-flow: row nowrap;
width: 100%;
height: 40px;
justify-content:center;
margin: 5px auto;
`
export const ButtonOrder = styled.button`
width: 140px;
min-height: 30px ;
background: ${(props)=> props.id === "b1" ? "red" : "green"};
color: white;
transition-duration: 25ms;
border-radius: 15px;
padding: 0.32rem;
margin: 20px;
:hover{
    background: gold;
}

`

export const ButtonAll = styled.button`
display:flex ;
width: 240px;
max-height: 40px ;
background: black;
color: white;
transition-duration: 25ms;
border-radius: 15px;
padding: 0.32rem;
margin: 10px auto;
:hover{
    background: darkgrey;
}

`

