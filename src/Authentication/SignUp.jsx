import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Password validation (at least 8 characters, one uppercase, one lowercase, one digit)
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        // Clear previous errors
        setNameError('');
        setEmailError('');
        setPasswordError('');

        // Simple validation
        if (!name) {
            setNameError('Please enter your name');
        }

        // Email validation
        if (!email) {
            setEmailError('Please enter your email address');
        } else if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address');
        }

        // Password strength validation
        if (!password) {
            setPasswordError('Please enter a password');
        } else if (!passwordRegex.test(password)) {
            setPasswordError('Password must be at least 8 characters, contain one uppercase letter, one lowercase letter, and one digit');
        }

        // Check if any errors exist
        if (nameError || emailError || passwordError) {
            return;
        }

        // Your axios post request
        axios.post('http://localhost:3011/register', { name, email, password })
            .then(result => {
                console.log(result);
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='bg-blue-700 h-screen flex items-center justify-center'>
            <div className='ml-[40px] w-[600px] border-2 bg-white p-8 rounded-md'>
                <h2 className='text-3xl font-bold text-black mb-6'>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className='block text-lg text-black'>Name</label>
                        <input
                            type='text'
                            className='w-full border-2 border-black p-2 rounded'
                            onChange={(e) => setName(e.target.value)}
                        />
                        {nameError && <p className="text-red-500 mt-2">{nameError}</p>}
                    </div>
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
                    <Link to="/Login">
                        <button className='text-blue-900'>Already Have Account? Login</button>
                    </Link><br></br>
                    <Link to="/AdminLogin">
                        <button className='text-blue-900'>Admin Login</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
