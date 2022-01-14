import React from 'react'
import img1 from '../../images/sc1.jpg'
import img2 from '../../images/sk2.jpg'
import styled from 'styled-components'
function BabyCare() {
    const data = [

        {

            title: "Product1",
            price: 2000,
            pic: img1,

        },

        {

            title: "Product2",
            price: 3000,
            pic: img2,
            quantityInCart: 0,
            inCart: false

        },
    ];

    const handleSubmit = (pic,title,price) =>{
           console.log(title,price);
    }

    return (
        <PContainer>
            <div class="d-flex justify-content-center">
{data.map((d) => (
        <div class=" mb-3 p-3" style={{width: "18rem"}}>
            
  <img style={{  height:'210px'}} src={d.pic} class="card-img-top" alt="..."/>
  <div class="">
    <p class="fs-4 fw-bold mt-2" style={{fontFamily:"cairo"}}>{d.title}</p>
    <p class="fs-4 fw-bold mt-2" style={{fontFamily:"cairo"}}>{d.price}$</p>
    <button type='button' className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{fontFamily:"cairo"}} onClick={()=>handleSubmit(d.pic,d.title,d.price)}>Add to WishList</button>


  </div>
  </div>

    ))}
        </div>
        </PContainer>
        
    )
}

export default BabyCare


export const PContainer = styled.div`
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