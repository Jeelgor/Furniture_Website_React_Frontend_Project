import { Navbar, Image, Container } from "react-bootstrap";
import logo from "./assets/logo.png";
import { NavLink, Route, Routes } from "react-router-dom";

import "./Styles/homepage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import bannerimg from './assets/bannerimg.png';
import Home from "./component/Home";
import Shop from "./component/Shop";
import Cards from "./component/Cards";


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
         Making Card for homepage
         */}
         <div className="AllCards">
               <Cards imageSrc={bannerimg} title="Chair" price="3000"/>
         </div>
   
    </>
  );
}

export default HomePage;
