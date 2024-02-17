// OrderForm.jsx

import React, { useState } from 'react';
import '../Styles/CheckOutPage.css';
import Navbarf from '../component/Navbarframe';
import Footer from '../component/Footer';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the order submission with formData
    console.log('Order placed with data:', formData);
    // You can add an API call or other actions here
  };

  return (
    <>
      <Navbarf />
      <form className='order-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='firstName'>First Name</label>
          <input
            id='firstName'
            name='firstName'
            className='text1'
            type='text'
            placeholder='Enter First Name'
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='lastName'>Last Name</label>
          <input
            id='lastName'
            name='lastName'
            className='text1'
            type='text'
            placeholder='Enter Last Name'
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email Id</label>
          <input
            id='email'
            name='email'
            className='text1'
            type='email'
            placeholder='Enter Email Id'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phoneNumber'>Phone Number</label>
          <input
            id='phoneNumber'
            name='phoneNumber'
            className='text1'
            type='tel'
            placeholder='Enter Phone Number'
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='address'>Address</label>
          <input
            id='address'
            name='address'
            className='text1'
            type='text'
            placeholder='Enter Address'
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit'>Place Order</button>
      </form>
      <Footer/>
    </>
  );
};

export default OrderForm;
