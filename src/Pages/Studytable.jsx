import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbarf from "../component/Navbarframe";
import Footer from "../component/Footer";

const StudyTable = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // Fetch registered user data
    axios
      .get("http://localhost:3011/StudyTable")
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
          <Link key={product._id} to={`/Study${index + 1}`} className="no-underline">
            <div key={product._id} className="justify-center items-center h-[300px] w-[230px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-transform duration-[0.2s] ease-[ease-in-out] bg-neutral-100 cursor-pointer ml-[130px] mt-[30px] rounded-[20px] border-2 border-solid border-[black] hover:scale-105 mr-[30vw]">
              <img src={`/src/assets/StudyTable/${product.imgpath}`} alt={product.name} className="product-image" />
              <div className="product-details">
                <p className="product-name text-black font-bold">{product.name}</p> {/* Increase font size */}
                <p className="product-price text-black">Price: {product.price}</p> {/* Increase font size */}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default StudyTable;




// // Studytable.jsx
// import React from "react";
// import Card from "../component/Card";
// import { Link } from "react-router-dom";
// import Footer from "../component/Footer";
// import Navbarf from "../component/Navbarframe";
// import Study1 from "../assets/StudyTable/Study1.png";
// import Study2 from "../assets/StudyTable/Study2.png";
// import Study3 from "../assets/StudyTable/Study3.png";
// import Study4 from "../assets/StudyTable/Study4.png";
// import Study5 from "../assets/StudyTable/Study5.png";
// import Study6 from "../assets/StudyTable/Study6.png";

// const Studytable = () => {
//   const studyTables = [
//     { id: 1, title: "StudyTable 1", price: "₹3000", image: Study1 },
//     { id: 2, title: "StudyTable 2", price: "₹4000", image: Study2 },
//     { id: 3, title: "StudyTable 3", price: "₹5000", image: Study3 },
//     { id: 4, title: "StudyTable 4", price: "₹6000", image: Study4 },
//     { id: 5, title: "StudyTable 5", price: "₹7000", image: Study5 },
//     { id: 6, title: "StudyTable 6", price: "₹8000", image: Study6 },
//   ];

//   return (
//     <>
//       <Navbarf />
//       <p className="mt-0 ml-[730px] font-bold text-2xl">Choose Your Study Table</p>
//       <div className="pt">
//         <p className="ml-[580px] font-semibold">
//           Upgrade your study space with our stylish and practical study table
//         </p>
//       </div>

//       <div className="flex grid grid-cols-4 mr-[10vw] ">
//         {studyTables.map((studyTable) => (
//           <Link key={studyTable.id} to={`/Study${studyTable.id}`} className="text-black hover:text-black text-decoration-none">
//             <Card ImageSrc={studyTable.image} title={studyTable.title} price={studyTable.price} />
//           </Link>
//         ))}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Studytable;
