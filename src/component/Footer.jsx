import React from "react";
import "../Styles/Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="fot">
                <div className="t1">
                    <p className="font-bold">Multimart</p>
                    <div className="textcol1">
                        <p>Versatile</p>
                        <p>Diverse</p>
                        <p>Dynamic</p>
                    </div>
                </div>

                <div className="t2">
                    <p className="font-bold">Top Categories</p>
                    <div className="textcol1">
                        <NavLink>
                            <p>Sofa</p>
                        </NavLink>
                        <NavLink>
                            <p>Study Table</p>
                        </NavLink>
                        <NavLink>
                            <p>Chair</p>
                        </NavLink>
                    </div>
                </div>
                             
                <div className="t3">
                    <p className="font-bold">Useful Links</p>
                    <div className="textcol1">
                        <NavLink>
                            <p>Cart</p>
                        </NavLink>
                        <NavLink>
                            <p>Home</p>
                        </NavLink>
                        <NavLink>
                            <p>Shop</p>
                        </NavLink>
                    </div>
                </div>

                <div className="t4">
                    <p className="font-bold">Contacts</p>
                    <div className="textcol1">
                        <p>Rajkot</p>
                        <p>+91 53378884585</p>
                        <p>furniture@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
