// import React, { useState } from 'react';
// import './Cartitem.css';
// import pizza from "./img/pizza.jfif"

// const Cart = () => {
//   // Simulated static cart with one or two products
//   const [staticCart, setStaticCart] = useState({
//     "Pizza": 2,
//     "Burger": 1
//   });

//   const increment = (item) => {
//     setStaticCart({
//       ...staticCart,
//       [item]: staticCart[item] + 1
//     });
//   };

//   const decrement = (item) => {
//     if(staticCart[item] > 1) {
//       setStaticCart({
//         ...staticCart,
//         [item]: staticCart[item] - 1
//       });
//     }
//   };

//   return (
//     <div className="cart-container glass-navbar">
//       <h2>Your Cart</h2>
//       {Object.keys(staticCart).map((item, index) => (
//         <div className="cart-item" key={index}>
//           <div className="item-info">
//             <h2>{item}</h2>
//             <p>Description of pizza...</p>
//           </div>
//           <div className="image-and-actions">
//             <img src={pizza} alt="Pizza" />
//           <div className="item-actions">
//     <button className="btn" onClick={() => decrement(item)}>-</button>
//             <span>{staticCart[item]}</span>
//     <button className="btn" onClick={() => increment(item)}>+</button>
//           </div>
//             </div>
//          </div>
//       ))}
//     </div>
//   );
// };

// export default Cart;

import React, { useState } from 'react';
import './Cartitem.css';

const Cart = () => {
  const [staticCart, setStaticCart] = useState({
    "Pizza": 2,
    "Burger": 1,
   
  });
  const [address, setAddress] = useState('');

  const increment = (item) => {
    setStaticCart({
      ...staticCart,
      [item]: staticCart[item] + 1
    });
  };

  const decrement = (item) => {
    if(staticCart[item] > 1) {
      setStaticCart({
        ...staticCart,
        [item]: staticCart[item] - 1
      });
    }
  };

  return (
    <div className="cart-container glass-navbar">
      <h2>Your Cart</h2>
      <div className="cart-content">
        <div className="cart-items">
          {Object.keys(staticCart).map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="item-info">
                <h2>{item}</h2>
              </div>
              
              <div className="item-actions">
                <button className="btn" onClick={() => decrement(item)}>-</button>
                <span>{staticCart[item]}</span>
                <button className="btn" onClick={() => increment(item)}>+</button>
              </div>
            </div>
        
          ))}
          <div className="address-input">
            <label for="address">Address:</label>
            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter your address"/>
          </div>
        </div>
        <div className="payment-section">
          <h3>Payment Options</h3>
          <div style={{color:"red"}}>available</div>
          <div>Cash on delivery</div>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
};


export default Cart;

