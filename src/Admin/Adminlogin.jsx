import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Define the allowed admin credentials
    const allowedAdmins = [
      { email: 'Jeel10@gmail.com', password: 'Jeel@123' },
      { email: 'Aditya07@gmail.com.com', password: 'Aditya@123' }
    ];

    // Clear previous errors
    setEmailError('');
    setPasswordError('');

    // Email and password validation
    if (!email || !password) {
      setEmailError('Please enter both email and password');
      return;
    }

    // Check if the entered credentials match any allowed admin
    const isAdmin = allowedAdmins.some(admin => admin.email === email && admin.password === password);

    if (isAdmin) {
      // Redirect to Adminnav if admin credentials are valid
      navigate('/Adminnav');
      toast.success("Welcome Admin");
    } else {
      // Display an error 
      setEmailError('Invalid email or password');
    }
  };

  return (
    <div className='bg-blue-700 h-screen flex items-center justify-center'>
      <div className='ml-[40px] w-[600px] border-2 bg-white p-8 rounded-md'>
        <h2 className='text-3xl font-bold text-black mb-6'>Sign In</h2>
        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label className='block text-lg text-black'>Email</label>
            <input
              type='email'
              className='w-full border-2 border-black p-2 rounded'
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="text-red-500 mt-2">{emailError}</p>}
          </div>
          <div className="mb-4">
            <label className='block text-lg text-black'>Password</label>
            <input
              type='password'
              className='w-full border-2 border-black p-2 rounded'
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="text-red-500 mt-2">{passwordError}</p>}
          </div>
          <button className='w-full bg-blue-700 text-white py-2 rounded-md'>Sign Up</button>
          <Link to="/SignUp">
            <button className='text-blue-900'>don't have Account Sign Up Here</button>
          </Link>


        </form>
      </div>
    </div>
  );
};

export default LoginPage;
