import { Navbar, Image, Container } from "react-bootstrap";
import logo from "./assets/logo.png";
import { NavLink, Route, Routes } from "react-router-dom";

import "./Styles/homepage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// Example import in HomePage.js
import bannerimg from './assets/bannerimg.png';
import chair1 from './assets/chair1.png';
import chair5 from './assets/chair5.png';
import chair7 from './assets/chair7.png';
import chair6 from './assets/chair6.png';
import Home from "./component/Home";
import Shop from "./component/Shop";
import Card from './component/Card';



function HomePage() {
  return (
    <>
      <div className="navbar">
        <div>
          <Image src={logo} alt="Logo" className="logopng" />
        </div>

        <div>
          <Navbar className="nametext">
            <NavLink className="home" to="/">Home</NavLink>
            <NavLink className="shop" to="shop">Shop</NavLink>
            <NavLink className="cart">
              Cart
            </NavLink>
          </Navbar>
        </div>

        <div className="icons">
          <div className="icons-faShoppingCart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
          <div className="icons-faUser">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
      <div className="btop">
        <section className="bannersec">
          <Container className="banner">
            <div className="headingtext">
              <p> Trending Product in 2024 </p>
              <h2>Make Your Interior More Minimalistic & Modern</h2>
              <h5>Elevate your space with our stylish and comfortable furniture pieces</h5>
              <button className="clickb">Shop Now</button>
            </div>

            <div className="imgsec">
              <Image src={bannerimg} alt="banner" className="bannerimg" />
            </div>

          </Container>

        </section>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      {/* 
         Making Card for homepage using props file name Card and HomeCard.css
         */}

      <h3 style={{ marginLeft: 660, marginTop: 40 }}>Trending Product</h3>

      <div className="AllCards">
        <Card ImageSrc={chair1} title="Chair1" price="₹3000" />
        <Card ImageSrc={chair5} title="Chair2" price="₹4000" />
        <Card ImageSrc={chair7} title="Chair3" price="₹5000" />
        <Card ImageSrc={chair6} title="Chair4" price="₹6000" />
      </div>
      <h3 style={{ marginLeft: 690, marginTop: 60 }}> Best Sales</h3>

      <div className="BestSalespd">
        <Card ImageSrc={chair1} title="Chair1" price="₹3000" />
        <Card ImageSrc={chair5} title="Chair2" price="₹4000" />
        <Card ImageSrc={chair7} title="Chair3" price="₹5000" />
        <Card ImageSrc={chair6} title="Chair4" price="₹6000" />
      </div>
    </>
  );
}

export default HomePage;
