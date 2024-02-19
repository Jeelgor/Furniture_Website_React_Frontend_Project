import React from "react";
import { NavLink } from "react-router-dom";
import { Image, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// import "../Styles/Navbar.css";

const Navbarf = () => {
  return (
    <div className="flex justify-between overflow-hidden">
      <div>
        <NavLink to="/">
          <Image src={logo} alt="Logo" className="w-[160px] h-[140px] pb-8" />
        </NavLink>
      </div>

      <div>
        <Navbar className="nametext">
          <NavLink to="/" style={{ color: 'black', textDecoration: 'none' }}>
              <p className="m-4  transition-transform duration-[0.2s] ease-[ease-in-out] cursor-pointer hover:underline scale-105">Home</p>
          </NavLink>

          <div>
            <NavLink to="/cart" style={{ color: 'black', textDecoration: 'none' }}>
              <p className="mt-3  transition-transform duration-[0.2s] ease-[ease-in-out] cursor-pointer hover:underline scale-105">Cart</p>
            </NavLink>
          </div>
        </Navbar>
      </div>
            
          
      <div className="flex mt-8">
        <NavLink to="/cart">
          <div className="w-[60px] h-[40px]">
            <FontAwesomeIcon icon={faShoppingCart} className="" />
          </div>
        </NavLink>
        <NavLink>
          <div className="icons-faUser">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </NavLink>
      </div>
    </div>
  );
};
export default Navbarf;
