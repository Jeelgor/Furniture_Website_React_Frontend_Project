import React from "react";
import { Link, NavLink } from "react-router-dom";

const FooterLink = ({ to, children }) => (
  <Link to={to} className="text-white transition-transform duration-[0.2s] ease-[ease-in-out] cursor-pointer hover:scale-105">
    {children}
  </Link>
);

const Footer = () => {
  return (
    <div className="bg-[#071730] py-20 mt-4">
      <div className="container mx-auto flex justify-around">
        {/** Section 1 */}
        <div className="flex flex-col">
          <p className="font-bold text-white">Multimart</p>
          <div className="flex flex-col gap-3 transition-transform duration-[1.2s] ease-in-out">
            <FooterLink to="/">Versatile</FooterLink>
            <FooterLink to="/">Diverse Table</FooterLink>
            <FooterLink to="/">Dynamic</FooterLink>
          </div>
        </div>

        {/** Section 2 */}
        <div className="flex flex-col">
          <p className="font-bold text-white">Top Categories</p>
          <div className="flex flex-col gap-3 transition-transform duration-[1.2s] ease-in-out">
            <NavLink to="/SofaPage" className="text-white transition-transform duration-[0.2s] ease-[ease-in-out] cursor-pointer hover:scale-105">
              Sofa
            </NavLink>
            <NavLink to="/Studytable" className="text-white transition-transform duration-[0.2s] ease-[ease-in-out] cursor-pointer hover:scale-105">
              Study Table
            </NavLink>
            <NavLink to="/ChairPage" className="text-white transition-transform duration-[0.2s] ease-[ease-in-out] cursor-pointer hover:scale-105">
              Chair
            </NavLink>
          </div>
        </div>

        {/** Section 3 */}
        <div className="flex flex-col">
          <p className="font-bold text-white">Useful Links</p>
          <div className="flex flex-col gap-3">
            <FooterLink to="/Cart">Cart</FooterLink>
            <FooterLink to="/HomePage">Home</FooterLink>
            <FooterLink to="/ChairPage">Shop</FooterLink>
          </div>
        </div>

        {/** Section 4 */}
        <div className="flex flex-col">
          <p className="font-bold text-white">Contact</p>
          <div className="flex flex-col gap-3">
            <FooterLink to="https://www.google.com/maps/place/Rajkot,+Gujarat/@22.2734662,70.7388945,12z/data=!3m1!4b1!4m6!3m5!1s0x3959c98ac71cdf0f:0x76dd15cfbe93ad3b!8m2!3d22.3038945!4d70.8021599!16zL20vMDNnbWxx?entry=ttu">
              Rajkot
            </FooterLink>
            <p className="text-white transition-transform duration-[0.2s] ease-[ease-in-out] cursor-pointer hover:scale-105">+91 53378884585</p>
            <FooterLink to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSBpgVjzcbkXLpRzHLtDRLnBKvcQvlwvLrjvSXgjdKcvDLssxbhlNFXvctKgpDwFzJstqplc">
              furniture123@gmail.com
            </FooterLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
