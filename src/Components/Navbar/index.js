import React from 'react'
import { FaBars } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
// import {Button} from '../Button'
import styled from 'styled-components'
import logo from '../../images/logor.png'
import { Nav, NavbarContainer, NavLogo ,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink,NavLinkS} from './NavbarElements'
import { useState } from 'react'
import { useEffect } from 'react'
import {animateScroll as scroll} from 'react-scroll'
export const Navbar = ({toggle}) => {

    const [scrollNav,setScrollNav] = useState(false);

    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        
        else{
            setScrollNav(false)           
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []) ;

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav scrollNav= {scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                    <Img src={logo} alt="logo_ggc"  />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinkS 
                            to="aboutus" 
                            >About Us</NavLinkS>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/products"
                            >Our Shop</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/vision"
                            >Our Mission</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/location"
                            >Store Locations</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/wishlist"
                            >Wish List</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                    <NavBtnLink to="/contact-us">
                    Contact Us
                    </NavBtnLink>
                       
                    </NavBtn>

                    
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar


const Img = styled.img`
  height: 70px;
`