import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
function WishList() {

   const [WishData, setWishData] = useState([])
   

   useEffect(() => {
    getWishData();
  },[]);

  const getWishData = async () => {
    axios.get('http://localhost:5000/wishlist').then(res=>{
           console.log(res.data)
           setWishData(res.data);
       })
   
  }
  const handleDelete = (id) =>{
           console.log(id);

           axios.delete('http://localhost:5000/wishlist/'+id)
      .then(response => { console.log(response.data)});

      setWishData({
        WishData: WishData.filter(el => el._id !== id)
    })
    }

    return (
        <WishContainer>
           <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">price</th>
            
          </tr>
        </thead>
        <tbody>
        {WishData && WishData.map((details,index) => {
            return(
                <tr key={index}>
                {console.log(details)}
                <td>{details.name}</td>
                <td>{details.category}</td>
                <td>{details.price}</td>
               
                <td><button type="button" class="btn btn-danger" onClick={()=>{handleDelete(details._id)}}>Delete</button>
  </td>
  
                
                
              </tr>
            )
           
})}
        </tbody>
      </table>
        </WishContainer>
    )
}

export default WishList


export const WishContainer = styled.div`
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