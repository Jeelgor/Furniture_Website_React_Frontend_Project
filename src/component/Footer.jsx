import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#071730] py-20 mt-8">
            <div className="container mx-auto flex justify-around">
                <div className="flex flex-col ">
                    <p className="font-bold text-white">Multimart</p>
                    <div className="flex flex-col gap-3 transition-transform duration-[1.2s] ease-in-out">
                        <p className="text-white transition-transform duration-[0.2s] ease-[ease-in-out] cursor-pointer hover:scale-105">Versatile</p>
                        <p className="text-white transition-transform duration-[0.2s] ease-[ease-in-out] cursor-pointer hover:scale-105">Diverse Table</p>
                        <p className="text-white transition-transform duration-[0.2s] ease-[ease-in-out] cursor-pointer hover:scale-105">Dynamic</p>
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
                        <NavLink to="/HomePage" className="text-white transition-transform duration-[0.2s] ease-[ease-in-out] cursor-pointer hover:scale-105">Home</NavLink>
                        <NavLink to="/ChairPage" className="text-white transition-transform duration-[0.2s] ease-[ease-in-out] cursor-pointer hover:scale-105">Shop</NavLink>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold text-white">Useful Links</p>
                    <div className="flex flex-col gap-3 ">
                        <Link to={'https://www.google.com/maps/place/Rajkot,+Gujarat/@22.2734662,70.7388945,12z/data=!3m1!4b1!4m6!3m5!1s0x3959c98ac71cdf0f:0x76dd15cfbe93ad3b!8m2!3d22.3038945!4d70.8021599!16zL20vMDNnbWxx?entry=ttu'}>
                            <p className="text-white transition-transform duration-[0.2s] ease-[ease-in-out] cursor-pointer hover:scale-105">Rajkot</p>
                        </Link>
                        <p className="text-white transition-transform duration-[0.2s] ease-[ease-in-out] cursor-pointer hover:scale-105">+91 53378884585</p>
                        <Link to={'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSBpgVjzcbkXLpRzHLtDRLnBKvcQvlwvLrjvSXgjdKcvDLssxbhlNFXvctKgpDwFzJstqplc'}>
                            <p className="text-white transition-transform duration-[0.2s] ease-[ease-in-out] cursor-pointer hover:scale-105">furniture123@gmail.com</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
