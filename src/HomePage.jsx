import { Image, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./Styles/homepage.css";
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
import Card from "./component/Card";
import Footer from "./component/Footer";
import Navbarf from "./component/Navbarframe";

function HomePage() {
  return (

    <>
     <Navbarf/>

      <div className="btop">
        <section className="bannersec">
          <Container className="banner">
            <div className="headingtext">

              <p> Trending Product in 2024 </p>
              <h2>Make Your Interior More Minimalistic & Modern</h2>
              <h5>
                Elevate your space with our stylish and comfortable furniture
                pieces
              </h5>
              <button className="clickb">Shop Now</button>
            </div>

            <div className="imgsec">
              <Image src={bannerimg} alt="banner" className="imgsec" />
            </div>
          </Container>
        </section>
      </div>

      {/* 
         Making Card for homepage using props file name Card and HomeCard.css
         */}

      <h3 style={{ marginLeft: 660 }}>Trending Product</h3>

      <div className="AllCards">
        <Card ImageSrc={chair1} title="Chair1" price="₹3000" />
        <Card ImageSrc={chair5} title="Chair2" price="₹4000" />
        <Card ImageSrc={chair7} title="Chair3" price="₹5000" />
        <Card ImageSrc={chair6} title="Chair4" price="₹6000" />
      </div>
      <h3 style={{ marginLeft: 690, marginTop: 60 }}> Best Sales</h3>

      <div className="BestSalespd">
        <Card ImageSrc={sofa1} title="sofa1" price="₹3000" />
        <Card ImageSrc={sofa2} title="sofa2" price="₹4000" />
        <Card ImageSrc={sofa3} title="sofa3" price="₹5000" />
        <Card ImageSrc={sofa4} title="sofa4" price="₹6000" />
      </div>

      <div className="flex">
        <div className="textp">
          <p className="textp">Our Products</p>
        </div>
      </div>
      <div className="Al">
        <NavLink to="/Studytable" style={{ textDecoration: "none" }}>
          <div className="imgContainer">
            <div className="imglogo">
              <Image src={StudyLogos} alt="studylogo" className="imglogo" />
            </div>
            <div className="textHeading">
              <p className="text-black ">Study Table</p>
            </div>
          </div>
        </NavLink>

        <NavLink to="/Sofapage" style={{ textDecoration: "none" }}>
          <div className="imgContainer">
            <div className="imglogo2">
              <Image src={SofaLogo} alt="SofaLogo" className="imglogo2" />
            </div>
            <div className="textHeading">
              <p className="text-black no-underline">Sofa</p>
            </div>
          </div>
        </NavLink>

        <NavLink to="/ChairPage" style={{ textDecoration: "none" }}>
          <div className="imgContainer">
            <div className="imglogo3">
              <Image src={ChairLogo} alt="ChairLogo" className="imglogo3" />
            </div>
            <div className="textHeading">
              <p className="text-black no-underline">Chair</p>
            </div>
          </div>
        </NavLink>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
