// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './Login';
// import Signup from './Signup';
import Nav from './component/Nav'
// import Cart from './Cart'
import CartItem from './component/CartItem'
import Footer from './component/Footer'
import "./App.css"
import Profile from './component/Profile';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          
          <Route path="/login" element={<Profile/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/cart" element={<CartItem/>}></Route>
        </Routes>
        <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
