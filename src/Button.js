import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled.a`
background : ${({primary}) => (primary ? '#F26A2E' : '#077BF1')};
white-space : nowrap;
padding: ${({big }) => (big ? '18px 42px' : '10px 32px')};
color : #fff;
font-size: ${({big}) => (big ? '20px' : '16px')};
outline: none;
border : none;
min-width : 100px;
cursor : pointer;
text-decoration: none;
transition : 0.3s !important;
border-radius: ${({round}) => (round ? "50px" : "none")};
font-family : 'Poppins';
&:hover{
    background : ${({primary}) => (primary? "#077BF1":" #F26A2E")};
    transform : translateY(-2px);
}


`;