import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Image, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
// import UserContext from "./UserContext";
import axios from "axios";

const Navbarf = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  // const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();
  // const { user } = useContext(UserContext);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
    console.log("Logout clicked");
  };

  

  return (
    <div className="flex justify-between overflow-hidden">
      <div>
        <NavLink to="/HomePage">
          <Image src={logo} alt="Logo" className="w-[160px] h-[140px] pb-8" />
        </NavLink>
      </div>

      <div>
        <Navbar className="nametext">
          <NavLink to="/HomePage" style={{ color: 'black', textDecoration: 'none' }}>
            <p className="m-4  transition-transform duration-[0.2s] ease-[ease-in-out] cursor-pointer hover:underline scale-105">Home</p>
          </NavLink>

          <div>
            <NavLink to="/cart" style={{ color: 'black', textDecoration: 'none' }}>
              <p className="m-4  transition-transform duration-[0.2s] ease-[ease-in-out] cursor-pointer hover:underline scale-105">Cart</p>
            </NavLink>
          </div>
          {/* <div>
            <NavLink to="/AddProduct" style={{ color: 'black', textDecoration: 'none' }}>
              <p className="m-4  transition-transform duration-[0.2s] ease-[ease-in-out] cursor-pointer hover:underline scale-105">Add Product</p>
            </NavLink>
          </div> */}
        </Navbar>
      </div>

      <div className="flex mt-8">
        <div className="relative">
          <div onClick={handleDropdownToggle} className="cursor-pointer">
            <FontAwesomeIcon icon={faUser} />
          </div>
          {showDropdown && (
            <div className="absolute right-0 mt-2 bg-white border rounded-md shadow-md p-2">
              <p className="mb-2 text-gray-600">User</p>
              <button onClick={handleLogout} className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                Logout
              </button>
            </div>
          )}
        </div>

        <NavLink to="/cart">
          <div className="w-[60px] h-[40px] ml-4">
            <FontAwesomeIcon icon={faShoppingCart} className="" />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbarf;
