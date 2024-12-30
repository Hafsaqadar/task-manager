import React, { useState } from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword as createUser } from 'firebase/auth';

const Register = () => {
  console.log("Register component rendering");
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("Attempting to create user with:", email);
      const userCredential = await createUser(auth, email, password);
      console.log("User created successfully:", userCredential);
      
      if (userCredential.user) {
        console.log("Navigating to HomePage...");
        navigate("/HomePage", { replace: true });
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-buttons">
        <button className="register-btn1">Sign Up</button>
        <button className="register-btn2" onClick={() => navigate('/login')}>Login</button>
      </div>
      <h2 className="register-title">Sign Up for free</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="register-column">
           
        <input 
            className="register-input"
            type="text" 
            placeholder="Username*"
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
          />
             

        <input 
            className="register-input"
            type="email" 
            placeholder="Email Address*"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />

         
         
          <input 
            className="register-input"
            type="password" 
            placeholder="Set A Password*"
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button 
          className="register-btn3" 
          type="submit" 
          disabled={loading}
        >
          {loading ? 'Creating account...' : 'Get Started'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default Register