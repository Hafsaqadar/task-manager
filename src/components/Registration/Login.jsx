import React from 'react';
import {Link} from 'react-router-dom';


function Login() {
  return (
    <div className='bg-gray-100 flex items-center justify-center min-h-screen ' >
      {/* login card */}
      <div className='bg-white rounded-lg p-8 shadow-lg max-w-md w-full'>
      <h1 className='text-center text-2xl font-semibold text-gray-800 mb-6 '>Log in to you account </h1>
      <form className='space-y-4 '>
        <div>
          <label htmlFor='email' className='block text-xl font-medium text-gray-600 '>Email</label>
          <input type='email' placeholder='Enter your email' className='mt-4 block w-full p-2 bg-slate-100 border-gray-300 shadow-sm'/>
        </div>
        <div>
          <label htmlFor='password' className='block text-xl font-medium text-gray-600 '>Password</label>
          <input type='password' placeholder='Enter your password' className='mt-4 block w-full p-2 bg-slate-100 border-gray-600 shadow-sm'/>
        </div>
        </form>
   
        <button type='submit' className='w-full bg-blue-700 text-white p-2 rounded-3xl mt-8 '>Log in</button> 
      
    
      
      <div className='text-center mt-4 text-gray-600 '>

        
        <p>Dont have an account? <Link to='/signup' className='text-blue-700'>sign up</Link></p>

      </div>
     
      </div>
    </div>
  )
}

export default Login
