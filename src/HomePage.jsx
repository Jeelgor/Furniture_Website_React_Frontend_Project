import {  Image, Container } from "react-bootstrap";


import "./Styles/homepage.css";
// Example import in HomePage.js
import bannerimg from './assets/bannerimg.png';
import chair1 from './assets/chair1.png';
import chair5 from './assets/chair5.png';
import chair7 from './assets/chair7.png';
import chair6 from './assets/chair6.png';
import Card from './component/Card';



function HomePage() {
  return (
    <>
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
