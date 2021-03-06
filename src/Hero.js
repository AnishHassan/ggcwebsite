import React from 'react'
import styled from 'styled-components'
import { Button } from "./Button"
import video from './videos/vid.mp4'
import img1 from './images/1.jpg'
import img2 from './images/s1.jfif'
import img3 from './images/s2.jpg'
import img4 from './images/s3.jpg'
import img5 from './images/s4.jpg'
import { keyframes } from 'styled-components'
import AboutUs from './Components/AboutUs'
import Contacttemp from './Components/Contact/Contacttemp'
import Tilt from 'react-tilt'
import IntroAboutUs from './Components/introCompany/IntroAbout'

const Hero = () => {
  return (
    <div>
      <HeroContainer>
        <HeroBg>
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <ImgBg src={img2}  alt="..." />
              </div>
              <div className="carousel-item">
                <ImgBg src={img3} alt="..." />
              </div>
              <div className="carousel-item">
                <ImgBg src={img5}  alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </HeroBg>
        <HeroContent>
          <HeroItems>
            <Tilt>
              <HeroH1>Beauty & Cosmetics Products</HeroH1>
            </Tilt>

            <Hero2>BabyCare | SkinCare | HairCare and much more</Hero2>
            <Tilt>
              <HeroP>By Soft Touch</HeroP>
            </Tilt>
            <button type="button" href="https://www.goldengirlcosmetics.com/" className="btn btn-outline-success btn-lg" >Shop Now</button>

            {/* <Button className="btn btn-outline-success" primary="true" big="true" round="true" href="https://www.goldengirlcosmetics.com/" target="_blank" style={{textDecoration : 'none'}}>Shop Now</Button> */}
            <Scrolldown>
              <Chevrons>
                <Chevrondown></Chevrondown>
                <Chevrondown></Chevrondown>
              </Chevrons>
            </Scrolldown>
          </HeroItems>

        </HeroContent>
      </HeroContainer>
      <div >
      <IntroAboutUs/>
      </div>
      <AboutUs />
      <div className=' mt-5 mb-5'>
        <Contacttemp />
      </div>
      
      
    </div>
  )
}

export default Hero


const HeroContainer = styled.div`

background: #0c0c0c;
display: flex;
justify-content : center;
color : #fff; 
height: 100vh;
padding : 0 1rem;
position: relative;
margin-top:-100px;

:before{

    content: "";
    position: absolute;
    top: 0;
    bottom : 0;
    right : 0;
    left : 0;
    z-index: 2;
    background: linear-gradient(
     180deg,
     rgba(0,0,0,0.2) 0%,
     rgba(0,0,0,0.6) 100%
    ),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%,  transparent 100%);
}

`

const HeroBg = styled.div`
position : absolute;
top: 0;
bottom : 0;
right : 0;
left : 0;
width : 100%;
height : 100%;
overflow: hidden;

`

const ImgBg = styled.img`
width : 100vw;
height: 100vh;
-o-object-fit : cover;
object-fit: cover;
`

const slBg = styled.div`
width : 100%;
height: 100%;
-o-object-fit : cover;
object-fit: cover;
`

const HeroContent = styled.div`
z-index  : 3;
height : calc(100vh - 80px);
max-height : 100%;
padding : 0rem calc((100vw - 1300px)/2);
margin-top : 50px;
`

const HeroItems = styled.div`
display : flex;
flex-direction: column;
justify-content: center;
align-items : center;
text-align : center;
height: 100vh;
max-height: 100%;
padding : 0;
color : #fff;
line-height: 1.1;
font-weight : bold;     

`


const HeroH1 = styled.h1`
font-size: clamp(1.5rem, 4vw , 3rem);
margin-bottom: 1.5rem;
letter-spacing: 3px;
padding: 0 1rem;
font-family : 'Poppins';
`




const HeroP = styled.p`
font-size: clamp(1rem, 2.3vw , 2rem);
margin-bottom: 2rem;
font-weight: 400;
font-family : 'Poppins';
`

const Hero2 = styled.p`
font-size: clamp(1rem, 1.5vw , 2rem);
margin-bottom: 2rem;
font-weight: 400;
font-family : 'Poppins';
color : #01bf71;;
`
const scrolldownanim = keyframes`
0% {
    opacity: 0;
    height: 6px;
  }
  40% {
    opacity: 1;
    height: 10px;
  }
  80% {
    transform: translate(0, 20px);
    height: 10px;
    opacity: 0;
  }
  100% {
    height: 3px;
    opacity: 0;
  }
`

const Scrolldown = styled.div`
--color: white;
  --sizeX: 30px;
  --sizeY: 50px;
  position: relative;
  width: var(--sizeX);
  height: var(--sizeY);
  margin-left: var(sizeX / 2);
  border: calc(var(--sizeX) / 10) solid var(--color);
  border-radius: 50px;
  box-sizing: border-box;
  margin-top : 40px;

  &:before{
      content: "";
  position: absolute;
  bottom: 30px;
  left: 50%;
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: var(--color);
  border-radius: 100%;
  animation:  ${scrolldownanim} 2s infinite;
  box-sizing: border-box;
  box-shadow: 0px -5px 3px 1px #ffffff66;
  }
}
`


const Chevrons = styled.div`
padding: 6px 0 0 0;
  margin-left: -3px;
  margin-top: 48px;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

`
const pulse = keyframes`
from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
`
const Chevrondown = styled.div`
margin-top: -6px;
  position: relative;
  border: solid var(--color);
  border-width: 0 3px 3px 0;
  display: inline-block;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);

  &:nth-child(odd) {
    animation: ${pulse} 500ms ease infinite alternate;
  }

  &:nth-child(even) {
    animation: ${pulse} 500ms ease infinite alternate 250ms;
  }

`


