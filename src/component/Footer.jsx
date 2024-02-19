import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#071730] py-20 mt-8">
            <div className="container mx-auto flex justify-around">
                <div className="flex flex-col">
                    <p className="font-bold text-white">Multimart</p>
                    <div className="textcol1">
                        <p className="text-white">Versatile</p>
                        <p className="text-white" >Diverse</p>
                        <p className="text-white">Dynamic</p>
                    </div>
                </div>

                <div className="flex flex-col ">
                    <p className="font-bold text-white">Top Categories</p>
                    <div className="flex flex-col gap-3 transition-transform duration-[1.2s] ease-in-out">
                        <NavLink to="/SofaPage" className="text-white transition-transform duration-[0.2s] ease-[ease-in-out] cursor-pointer hover:scale-105">Sofa</NavLink>
                        <NavLink to="/Studytable" className="text-white transition-transform duration-[0.2s] ease-[ease-in-out] cursor-pointer hover:scale-105">Study Table</NavLink>
                        <NavLink to="/ChairPage" className="text-white transition-transform duration-[0.2s] ease-[ease-in-out] cursor-pointer hover:scale-105">Chair</NavLink>
                    </div>
                </div>

                <div className="flex flex-col">
                    <p className="font-bold text-white">Useful Links</p>
                    <div className="flex flex-col gap-3 ">
                        <NavLink to="/Cart" className="text-white transition-transform duration-[0.2s] ease-[ease-in-out] cursor-pointer hover:scale-105">Cart</NavLink>
                        <NavLink to="/Home" className="text-white transition-transform duration-[0.2s] ease-[ease-in-out] cursor-pointer hover:scale-105">Home</NavLink>
                        <NavLink to="/Shop" className="text-white transition-transform duration-[0.2s] ease-[ease-in-out] cursor-pointer hover:scale-105">Shop</NavLink>
                    </div>
                </div>

                <div className="flex flex-col">
                    <p className="font-bold text-white">Contacts</p>
                    <div className="textcol1">
                        <p className="text-white">Rajkot</p>
                        <p className="text-white">+91 53378884585</p>
                        <p className="text-white"> furniture@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
