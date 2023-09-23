import React from "react";

export default function Card({props,link}) {
  
   
 if(props.resturant!=="Chacha Soya Chaa")
 {
  return(
    <div class="glass-card">
    {/* <h2>Product Name</h2> */}
    <img src={`${link}/${props.image}`} alt="Product Image" />
          <h2>{props.resturant} </h2>
          <h3>Price: {props.price}</h3>
          <div className="rating">
            <span>⭐⭐⭐⭐☆</span>
            <span><b>{props.no_of_rating}</b></span>
          </div>
         <p>Address: {props.address}</p>
  </div>
  )
 }
  
}

