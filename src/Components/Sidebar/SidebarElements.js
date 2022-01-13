import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import {Link as LinkS} from 'react-scroll'

export const SidebarContainer = styled.aside`
position : fixed;
z-index: 999;
width : 100%;
height : 100%;
background : #0d0d0d;
display :grid;
align-items: center; 
top: 0;
left : 0;
transition: 0.3s ease-in-out;
opacity : ${({ isOpen }) => (isOpen ? '100%' : '0%' ) };
top : ${({isOpen}) => (isOpen ? '0' : '-100%')};

`

export const CloseIcon = styled(FaTimes)`
color : #fff;
`
export const Icon = styled.div`
position : absolute;
top: 1.2rem;
right :1.5rem;
background : transparent;
font-size : 2rem;
cursor : pointer;
outline : none;
`
export const SidebarWrapper = styled.div`
 color : #fff;

`

export const SidebarLink = styled(LinkS)`
display : flex ;
align-items: center;
justify-content : center;
font-size : 1.5rem;
text-decoration : none;
list-style :none;
transition: 0.2s ease-in-out;
text-decoration : none;
color : #000;
cursor : pointer;

&:hover {
    color :#01bf71;
    padding-left : 10px;
    transform : translateY(-2px);
    transition : 0.2s ease-in-out;
}

`
export const SidebarMenu = styled.ul`
display : grid;
grid-template-columns : 1fr;
grid-template-rows: repeat(6,80px);
text-align : center;

@media screen and  (max-width : 480px){
    grid-template-rows : repeat(6,60px);
}



`

export const SideBtnWrap = styled.div`
display : flex;
justify-content : center;

`

export const SideBtnLink = styled(LinkS)`
border-radius : 50px;
background : #01bf71;
whitespace: nowrap;
padding :10px 22px;
color: #010606;
font-size: 16px;
outline : none;
border : none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration : none;

&:hover{
    transition : all 0.2s ease-in-out;
    background :#fff;
    color: #010606;
    transform : translateY(-2px);
}
`


export const SideContent = styled.div`
z-index  : 3;
height : calc(100vh - 80px);
max-height : 100%;
padding : 0rem calc((100vw - 1300px)/2);
margin-top : 50px;
`

export const Sidebg = styled.div`
position : absolute;
top: 0;
bottom : 0;
right : 0;
left : 0;
width : 100%;
height : 100%;
overflow: hidden;
`

export const Sideimg = styled.img`
width : 100vw;
height: 100vh;
-o-object-fit : cover;
object-fit: cover;
`