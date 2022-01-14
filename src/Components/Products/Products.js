import React from 'react'
import styled from 'styled-components'
import img1 from '../../images/skincare.jpg'
import img2 from '../../images/haircare.jpg'
import img3 from '../../images/manipedi.jpg'
import img4 from '../../images/baby.jpg'
import { Button } from '../../Button'
import { Link } from 'react-router-dom'

function Products(props) {

    const items = [{
      
        alt :  "Skin Care GGC",
        name : "Skin Care",
        button : "explore",
        img : img1,
        url : "/skincare",
        info :  "Care for your Skin, care for your beauty. We offer wide range of products related to skin care for glowing complexion." 
    },
    {
        alt :  "Hair Care GGC",
        name : "Hair Care",
        button : "explore",
        img : img2,
        url : "/haircare",
        info : "Happy hair, happy you. Make your hair fuller, thicker and shinier with Soft Touch hair care products."
    },
  
    {
        alt :  "Manicure&Pedicure GGC",
        name : "Menicure & Pedicure",
        button : "explore",
        img : img3,
        url : "/manipedi",
        info  : "Take care of your hands & feet.With Golden Girl exclusive menicure and pedicure products." 
    },{
        img :  img4,
        alt :  "Baby Care GGC",
        name : "Baby Care",
        button : "explore",
        url : "/babycare",
        info  : "Provide your baby with daily skincare. We have all the essential products you need to nourish your baby’s skin."  
    },]
    return (
        <div>
             <>
          <ProductsContainer id="vision">
          <ProductsHeading>{props.heading}</ProductsHeading>
          <ProductWrapper>
              {items.map((item,index)=>{
                  return(
                    <ProductCard key = {index} >
                    <ProductCardInner>
                      <ProductcardFront>
                       <ProductImg src={item.img}
                        title="Soft Touch"
                        alt={item.alt}
                        />    
                                   
                      <ProductsInfo>
                      <TextWrap>
                      <ProductTitle>{item.name}</ProductTitle>
                      </TextWrap>  

                       </ProductsInfo>
                      </ProductcardFront>
                      <ProductcardBack>
                      <ProductTitle2>{item.name}</ProductTitle2>
                      <ProductDescription>
                        {item.info}
                      </ProductDescription>
                      <ProductsInfo>
                      <Link to={item.url}><button  className="btn btn-primary"  primary= "true" round = "true"  css={` position : absolute; margin: 0; top: 90%; -ms-transform: translateY(-50%); transform: translateY(-50%); font-size: 16px; text-align: center;  `}   >  {item.button} </button></Link>
                      </ProductsInfo>                    
                      </ProductcardBack>
                    </ProductCardInner>
                    
                
                </ProductCard>
                  )
               
              })}
          
          </ProductWrapper>
        </ProductsContainer>
        </>
        </div>
    )
}

export default Products


export const ProductsContainer = styled.div`
min-height : 100vh;
padding : 5rem calc((100vw - 1300px) / 2);
background: rgb(31,1,1);
background: linear-gradient(90deg, rgba(188,188,188,1) 100%, rgba(255,188,93,1) 100%);
padding : 9rem calc((100vw - 1500px) / 2);
margin-top : -100px;
@media  screen and (max-width : 970px){
    min-height : 70vh;
}

`
const ProductsHeading = styled.div`
font-size : clamp(1.2rem, 5vw, 3rem);
text-align : center;
margin-bottom: 5rem;
color : #000;
font-family : 'Poppins';
`;

const ProductWrapper = styled.div`
display : grid ;
grid-template-columns : repeat(4 , 1fr);
grid-gap : 20px;
justify-contents : center;
padding : 0 2rem;

@media screen and (max-width: 1200px) {
  grid-template-columns :  1fr 1fr;
}

@media screen and (max-width: 868px) {
  grid-template-columns :  1fr;
}

`;

const ProductCard = styled.div`
   perspective: 1100px;
   background-color: transparent;
 
`;
const ProductCardInner = styled.div`
  cursor: pointer;
    line-height : 2;
    width : 100%;
    height: 400px;
    position : relative;
    border-radius : 10px;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    
    &:hover {
      transform: scale(1.05);
      transform: rotateY(180deg);

    }
`;
const ProductcardFront = styled.div`
    position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  cursor: pointer;
`;
const ProductcardBack = styled.div`
    position: absolute;
    cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius : 10px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background: rgb(31,1,1);
background: linear-gradient(90deg, rgba(31,1,1,1) 0%, rgba(102,102,102,1) 0%, rgba(131,16,115,1) 100%);
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
`;


const ProductImg = styled.img`
height : 100%;
max-width : 100%;
position : relatve;
border-radius : 10px;
transition: transform .2s;
filter : brightness(50%);
transition : 0.4s cubic-bezier(0.075,0.82,0.165,1);

&:hover {
 
  filter : brightness(80%);
   
}
`;

const ProductsInfo = styled.div`
display : flex;
flex-direction : column;
justify-content: center;
align-items: center;
padding : 0 2rem;



@media screen and  (max-width : 280px){
  padding : 0 1rem;
}


`;
const TextWrap = styled.div`
 display : flex;
 align-items : center;
 position : absolute;
 top : 180px;
 flex-direction : column;
`;
const ProductTitle = styled.div`
font-size : 1.3rem;
margin-left : 0.5rem;
color: #ffffff;
font-family : 'Poppins';
font-weight : 500; 
text-align: center;
text-transform : capitalize;
&:hover {
 
  color: #00000;
  
}

`;
const ProductTitle2 = styled.div`
font-size : 1.3rem;
margin-left : 0.5rem;
color: #ec268f;
font-family : 'Poppins';
font-weight : 700; 
text-align: center;
text-transform : capitalize;

`;

const ProductDescription = styled.div`
font-size : 1.4rem;
margin-left : 0.5rem;
color: #ffffff;
font-family : 'Poppins';
font-weight : 500; 
text-align: center;
align-items : center;
justify-content : center;
`;

