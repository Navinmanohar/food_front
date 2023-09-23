import React, { useState } from 'react';
import './Cart.css'; 
import pizza from "./img/pizza.jfif"

export default function Restaurant() {
  const [cart, setCart] = useState({ pizza: 0, burger: 0 });

  const increment = (item) => {
    setCart({ ...cart, [item]: cart[item] + 1 });
  };

  const decrement = (item) => {
    if (cart[item] > 0) {
      setCart({ ...cart, [item]: cart[item] - 1 });
    }
  };

  return (
    <div className="container glass-navbar">
      <div className="restaurant-info">
        <h1>Restaurant Name</h1>
        <p className="description">Description of the restaurant...</p>
        <p className="rating">Rating: ★★★★☆</p>
        <p className="delivery-time">Delivery Time: 30 mins</p>
      </div>

     <div className="menu">
        <div className="menu-item glass-navbar">
          <div className="item-info">
            <h2>Pizza</h2>
            <p>Description of pizza...</p>
          </div>
          <div className="image-and-actions">
            <img src={pizza} alt="Pizza" />
            <div className="item-actions">
              <button className="btn" onClick={() => decrement('pizza')}>-</button>
              <span>{cart.pizza}</span>
              <button className="btn" onClick={() => increment('pizza')}>+</button>
            </div>
            <button className="add-to-cart" onClick={() => addToCart('pizza')}>Add to Cart</button>
          </div>
        </div>
        <hr />

        
      </div>
    </div>
  );
}
