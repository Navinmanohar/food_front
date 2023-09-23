import React, { useState, useRef } from 'react';




const LoginForm = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup,login]=useState(true)
  const buttonRef = useRef(null);

  const handleButtonHover = () => {
    if (!username || !password) {
      moveButton();
    }
  };

  const moveButton = () => {
    if (buttonRef.current) {
      const randomX = Math.floor(Math.random() * 50) + 10;
      const randomY = Math.floor(Math.random() * 50) + 10;

      buttonRef.current.style.position = 'relative';
      buttonRef.current.style.left = `${randomX}px`;
      buttonRef.current.style.top = `${randomY}px`;
    }
  };

  return (
    <div className="neu-container">
      <h2>Login</h2>
      <form>
        <input 
          type="text" 
          className="neu-input" 
          placeholder="Username" 
          onChange={e => setUsername(e.target.value)} 
        />
        {/* { */}
          {/* isSignup&&
           <input 
          type="email" 
          className="neu-input" 
          placeholder="Email" 
          onChange={e => setEmail(e.target.value)}
        />
        } */}
        <input 
          type="password" 
          className="neu-input" 
          placeholder="Password" 
          onChange={e => setPassword(e.target.value)} 
        />
       
        <button 
          ref={buttonRef}
          type="submit" 
          className={!username || !password ? 'neu-button disabled' : 'neu-button'}
          onMouseOver={handleButtonHover}
          disabled={!username || !password }
        >
          {isSignup?'Signup':'Login'} 
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
