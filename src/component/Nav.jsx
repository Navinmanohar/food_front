import React from 'react';
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="glass-navbar">
      <h1>Food</h1>
      <ul >
        <li>
          <label htmlFor="input"></label>
          <input type="text" id="input" className="neu-input" 
           placeholder="Search"/>
        </li>
     <Link to='/' style={{color:'black',textDecoration:'none',marginTop:'8px'}}><li>Home</li></Link>
     
        <Link to='/contact'  style={{color:'black',textDecoration:'none',marginTop:'8px'}}> <li>Contact</li></Link>
        
        
        <Link to='/cart'  
          style={{color:'black',textDecoration:'none',marginTop:'8px'}}> <li>Cart</li></Link> 
         <Link to='/profile'  style={{color:'black',marginTop:'8px',textDecoration:'none'}}> <li>Profile</li></Link>
      </ul>
    </nav>
  );
}
