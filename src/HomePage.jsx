import React from "react";
import { Image, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Card from "./component/Card";
import Footer from "./component/Footer";
import Navbarf from "./component/Navbarframe";
import bannerimg from "./assets/bannerimg.png";
import chair1 from "./assets/Chair/chair1.png";
import chair5 from "./assets/Chair/chair5.png";
import chair7 from "./assets/Chair/chair7.png";
import chair6 from "./assets/Chair/chair6.png";
import sofa1 from "./assets/Sofaimg/sofa1.png";
import sofa2 from "./assets/Sofaimg/sofa2.png";
import sofa3 from "./assets/Sofaimg/sofa3.png";
import sofa4 from "./assets/Sofaimg/sofa4.png";
import StudyLogos from "./assets/Logo/StudyLogos.png";
import SofaLogo from "./assets/Logo/SofaLogo.png";
import ChairLogo from "./assets/Logo/ChairLogo.png";

function HomePage() {
  return (
    <>
      <Navbarf />
      <div className="bg-blue-200 mb-12">
        <Container className="flex items-center justify-between h-350 w-98.8vw">
          <div className="headingtext p-4 text-center">
            <p className="text-blue-800 pr-[600px]">Trending Product in 2024</p>
            <h2 className="text-3xl font-bold pr-[100px]">
              Make Your Interior More Minimalistic & Modern
            </h2>
            <h5 className="text-gray-700 pr-[170px]">
              Elevate your space with our stylish and comfortable furniture
              pieces
            </h5>
            <button className="bg-blue-800 text-white mr-[650px] mt-4 px-4 py-2 rounded ">
              Shop Now
            </button>

          </div>
          <div className="imgsec">
            <Image src={bannerimg} alt="banner" className="w-96 h-96" />
          </div>
        </Container>
      </div>

      <h3 className="text-center mt-4 ml-20">Trending Product</h3>
      <div className="AllCards flex justify-center mr-[85px]">
        <Card ImageSrc={chair1} title="Chair1" price="₹3000" />
        <Card ImageSrc={chair5} title="Chair2" price="₹4000" />
        <Card ImageSrc={chair7} title="Chair3" price="₹5000" />
        <Card ImageSrc={chair6} title="Chair4" price="₹6000" />
      </div>

      <h3 className="text-center mt-8 ml-20">Best Sales</h3>
      <div className=" flex justify-center mr-[85px]">
        <Card ImageSrc={sofa1} title="sofa1" price="₹3000" />
        <Card ImageSrc={sofa2} title="sofa2" price="₹4000" />
        <Card ImageSrc={sofa3} title="sofa3" price="₹5000" />
        <Card ImageSrc={sofa4} title="sofa4" price="₹6000" />
      </div>

      <div className="flex mt-12 justify-center ml-20">
        <div className="textp">
          <p className="textp text-2xl font-bold">Our Products</p>
        </div>
      </div>

      <div className="flex mt-4 justify-center space-x-8 justify-evenly">
        <NavLink
          to="/Studytable"
          className="imgContainer no-underline transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <div>
            <Image
              src={StudyLogos}
              alt="Study Table Logo"
              className="w-24 h-24 shadow-md bg-gray-200"
            />
          </div>
          <div className="textHeading mt-2 text-center">
            <p className="text-black font-bold">Study Table</p>
          </div>
        </NavLink>

        <NavLink
          to="/Sofapage"
          className="imgContainer no-underline transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <div>
            <Image
              src={SofaLogo}
              alt="Sofa Logo"
              className="w-24 h-24 shadow-md bg-gray-200"
            />
          </div>
          <div className="textHeading mt-2 text-center">
            <p className="text-black font-bold">Sofa</p>
          </div>
        </NavLink>

        <NavLink
          to="/ChairPage"
          className="imgContainer no-underline transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <div>
            <Image
              src={ChairLogo}
              alt="Chair Logo"
              className="w-24 h-24 shadow-md bg-gray-200"
            />
          </div>
          <div className="textHeading mt-2 text-center">
            <p className="text-black font-bold">Chair</p>
          </div>
        </NavLink>
      </div>

      <Footer />
    </>
  );
}

export default HomePage;
