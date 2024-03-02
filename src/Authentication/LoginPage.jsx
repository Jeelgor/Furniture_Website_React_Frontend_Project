import axios from 'axios';
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5174/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          Navigate('/HomePage');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className='ml-[460px] h-[500px] w-[600px] mt-[120px] bg-blue-500 p-8 rounded-md'>
        <h2 className='text-3xl font-bold text-white mb-6'>Sign Up</h2>
        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label className='block text-lg text-white'>Email</label>
            <input
              type='text'
              className='w-full border-2 border-white p-2 rounded'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className='block text-lg text-white'>Password</label>
            <input
              type='password'
              className='w-full border-2 border-white p-2 rounded'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='w-full bg-white text-blue-500 py-2 rounded-md'>Sign Up</button>
          <Link to="/Login">
            <button className='text-white'>Already Have Account? Login</button>
          </Link>
        </form>
      </div>
    </>
  );
};
