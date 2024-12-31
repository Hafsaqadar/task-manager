import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase';

function Login() {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    console.log('Login attempt with:', email);
   
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful:', userCredential.user.email);
      navigate('/homepage');
    } catch (error) {
      setError(error.message);
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='bg-gray-100 flex items-center justify-center min-h-screen'>
      {/* login card */}
      <div className='bg-white rounded-lg p-8 shadow-lg max-w-md w-full'>
        <h1 className='text-center text-2xl font-semibold text-gray-800 mb-6'>Log in to your account</h1>
        
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        
        <form onSubmit={handleLogin} className='space-y-4'>
          <div>
            <label htmlFor='email' className='block text-xl font-medium text-gray-600'>Email</label>
            <input 
              type='email' 
              id='email'
              placeholder='Enter your email' 
              className='mt-4 block w-full p-2 bg-slate-100 border-gray-300 shadow-sm'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='password' className='block text-xl font-medium text-gray-600'>Password</label>
            <input 
              type='password'
              id='password' 
              placeholder='Enter your password' 
              className='mt-4 block w-full p-2 bg-slate-100 border-gray-600 shadow-sm'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button 
            type='submit' 
            className='w-full bg-blue-700 text-white p-2 rounded-3xl mt-8'
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log in'}
          </button>
        </form>
    
        <div className='text-center mt-4 text-gray-600'>
          <p>Don't have an account? <Link to='/register' className='text-blue-700'>Sign up</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
