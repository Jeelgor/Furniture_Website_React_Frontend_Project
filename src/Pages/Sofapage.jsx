// SofaPage.jsx
import React from "react";
import Card from "../component/Card";
import sofa1 from "../assets/Sofaimg/sofa1.png";
import { Link } from "react-router-dom";
import Navbarf from "../component/Navbarframe";
import Footer from "../component/Footer";

const SofaPage = () => {
  const sofas = [
    { id: 1, title: "Sofa 1", price: "₹33000", description: "Description 1", image: sofa1 },
    { id: 2, title: "Sofa 2", price: "₹33000", description: "Description 2", image: sofa1 },
    // ... (other sofa data)
  ];

  return (
    <>
      <Navbarf />
      <p className="mt-0 ml-[730px] font-bold text-2xl">Choose Your Sofa</p>
      <div className="pt">
        <p className="ml-[490px] font-semibold">
          Elevate your living space with our luxurious sofas, where comfort meets contemporary design
        </p>
      </div>
      <div className="flex">
        {sofas.map((sofa) => (
          <Link key={sofa.id} to={`/sofa/${sofa.id}`} className="text-black">
            <Card ImageSrc={sofa.image} title={sofa.title} price={sofa.price} />
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default SofaPage;
