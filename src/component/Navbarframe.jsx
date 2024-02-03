import React from 'react'
import { NavLink } from 'react-router-dom';
import { Image, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "../Styles/Navbar.css"

const Navbarf = () => {
  return (
    <div className="navbar">
      <div>
        <NavLink>
          <Image src={logo} alt="Logo" className="logopng" />
        </NavLink>
      </div>

      <div>
        <Navbar className="nametext">
          <NavLink to="/">
            <div className='mr-8'>
              <p className='  '>Home</p>
            </div>
          </NavLink>

          <div>
            <NavLink to="/cart">
              <p>Cart</p>
            </NavLink>

          </div>
        </Navbar>
      </div>

      <div className="icons">
        <NavLink to="/cart">
          <div className="icons-faShoppingCart" >
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
        </NavLink>
        <NavLink>
          <div className="icons-faUser">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </NavLink>
      </div>
    </div>
  )
}
export default Navbarf;