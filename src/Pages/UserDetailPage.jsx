import React from 'react';
import Navbarf from '../component/Navbarframe';
import '../Styles/UserDetailPage.css';
import Footer from '../component/Footer';

const UserDetailPage = () => {
  return (
    <div>
      <Navbarf />
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="">First Name</label>
          <input type="text" placeholder="Enter First Name" className="textfielda" />
        </div>
        <div className="form-group">
          <label htmlFor="">Last Name</label>
          <input type="text" placeholder="Enter Last Name" className="textfielda" />
        </div>

        <div className="form-group">
          <label htmlFor="">Street Address</label>
          <input type="text" placeholder="Enter Street Address" className="textfielda" />
        </div>
        <div className="form-group">
          <label htmlFor="">Postal Code</label>
          <input type="text" placeholder="Enter Postal Code" className="textfielda" />
        </div>
        <div className="form-group">
          <label htmlFor="">Town/City</label>
          <input type="text" placeholder="Enter Town/City" className="textfielda" />
        </div>
        <div className="form-group">
          <label htmlFor="">Phone Number</label>
          <input type="text" placeholder="Enter Phone Number" className="textfielda" />
        </div>
        <button className='' style={{ fontSize: 22, color: 'white', border: '2px solid black', backgroundColor: '#0a1d56', marginLeft: 340, marginTop: 22, padding: 3 }}>Place Order</button>

      </div>
      <Footer />
    </div>
  );
};

export default UserDetailPage;
