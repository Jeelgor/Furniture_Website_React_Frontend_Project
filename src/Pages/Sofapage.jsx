import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbarf from "../component/Navbarframe";
import Footer from "../component/Footer";

const ChairPage = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // Fetch registered user data
    axios
      .get("http://localhost:3011/Sofas")
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Navbarf />
      <div className="text-3xl ml-[46vw]">OrdersData</div>

      {/* Display Product data */}
      <div className="grid grid-cols-4 mr-[10vw]">
        {product.map((product, index) => (
          <Link key={product._id} to={`/Sofa${index + 1}`} className="no-underline">
            <div
              key={product._id}
              className="flex flex-col justify-between h-[300px] w-[230px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-transform duration-[0.2s] ease-[ease-in-out] bg-neutral-100 cursor-pointer ml-[130px] mt-[30px] rounded-[20px] border-2 border-solid border-[black] hover:scale-105 mr-[30vw]"
            >
              <img
                src={`/src/assets/Sofaimg/${product.imgpath}`}
                alt={product.name}
                className="product-image"
              />
              <div className="product-details">
                <p className="text-1xl text-black font-semibold ">{product.name}</p> {/* Applied font-semibold to make the text bold */}
                <p className="text-2xl text-black">Price: {product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ChairPage;


// // SofaPage.jsx
// import React from "react";
// import Card from "../component/Card";
// import sofa1 from "../assets/Sofaimg/sofa1.png";
// import sofa2 from "../assets/Sofaimg/sofa2.png";
// import sofa3 from "../assets/Sofaimg/sofa3.png";
// import sofa4 from "../assets/Sofaimg/sofa4.png";
// import sofa5 from "../assets/Sofaimg/sofa5.png";
// import sofa6 from "../assets/Sofaimg/sofa6.png";
// import Sofa7 from "../assets/Sofaimg/Sofa7.png";
// import Sofa8 from "../assets/Sofaimg/Sofa8.png";
// import { Link } from "react-router-dom";
// import Navbarf from "../component/Navbarframe";
// import Footer from "../component/Footer";

// const SofaPage = () => {
//   const sofas = [
//     { id: 1, title: "Sofa 1", price: "₹33000", description: "Description 1", image: sofa1 },
//     { id: 2, title: "Sofa 2", price: "₹44000", description: "Description 2", image: sofa2 },
//     { id: 3, title: "Sofa 3", price: "₹30000", description: "Description 3", image: sofa3 },
//     { id: 4, title: "Sofa 4", price: "₹66000", description: "Description 4", image: sofa4 },
//     { id: 5, title: "Sofa 5", price: "₹7000", description: "Description 5", image: sofa5 },
//     { id: 6, title: "Sofa 6", price: "₹8000", description: "Description 6", image: sofa6 },
//     { id: 7, title: "Sofa 7", price: "₹9000", description: "Description 7", image: Sofa7 },
//     { id: 8, title: "Sofa 8", price: "₹10000", description: "Description 8", image: Sofa8 },
//   ];
//   return (
//     <>
//       <Navbarf />
//       <p className="mt-0 ml-[750px] font-bold text-2xl">Sofa</p>
//       <p className="ml-[580px] font-semibold ">
//         Upgrade your Home space with our stylish and practical Morden Sofa
//       </p>
//       {/* Card Section */}
//       <div className="flex grid grid-cols-4 mr-[10vw]">
//         {sofas.map((sofa) => (
//           <Link key={sofa.id} to={`/Sofa${sofa.id}`} className="text-black hover:text-black text-decoration-none">
//             <Card ImageSrc={sofa.image} title={sofa.title} price={sofa.price} />
//           </Link>
//         ))}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default SofaPage;