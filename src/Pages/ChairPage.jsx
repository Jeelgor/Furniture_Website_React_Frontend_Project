import React from "react";
import Card from "../component/Card";
import chair1 from "../assets/Chair/chair1.png";
import chair2 from "../assets/Chair/chair2.png";
import chair4 from "../assets/Chair/chair4.png";
import chair5 from "../assets/Chair/chair5.png";
import chair6 from "../assets/Chair/chair6.png";
import chair7 from "../assets/Chair/chair7.png";
import chair8 from "../assets/Chair/chair8.png";

import Footer from "../component/Footer";
import Navbarf from "../component/Navbarframe";
import { Link } from "react-router-dom";

const ChairPage = () => {
  return (
    <>
      <Navbarf />
      <p className="mt-0 ml-[750px] font-bold text-2xl">Study Table</p>
      <p className="ml-[580px] font-semibold ">
        Upgrade your study space with our stylish and practical Morden Chair
      </p>
      {/* Card Section */}
      <div className="flex">
        <Link to="/Chair1" className="text-black hover:text-black text-decoration-none">
          <Card ImageSrc={chair1} title="Chair" price="₹3000" />
        </Link>
        <Link to="/Chair2" className="text-black hover:text-black text-decoration-none">
          <Card ImageSrc={chair2} title="Chair" price="₹4000" />
        </Link>
        <Link to="/Chair3" className="text-black hover:text-black text-decoration-none">
          <Card ImageSrc={chair1} title="Chair" price="₹5000" />
        </Link>
        <Link to="/Chair4" className="text-black hover:text-black text-decoration-none">
          <Card ImageSrc={chair4} title="Chair" price="₹6000" />
        </Link>
      </div>
      <div className="flex">
        <Link to="/Chair5" className="text-black hover:text-black text-decoration-none">
          <Card ImageSrc={chair5} title="Chair" price="₹7000" />
        </Link>
        <Link to="/Chair6" className="text-black hover:text-black text-decoration-none">
          <Card ImageSrc={chair6} title="Chair" price="₹8000" />
        </Link>
        <Link to="/Chair7" className="text-black hover:text-black text-decoration-none">
          <Card ImageSrc={chair7} title="Chair" price="₹9000" />
        </Link>
        <Link to="/Chair8" className="text-black hover:text-black text-decoration-none">
          <Card ImageSrc={chair8} title="Chair" price="₹10000" />
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default ChairPage;
