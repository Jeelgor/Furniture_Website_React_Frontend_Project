import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbarf from "../component/Navbarframe";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

const ChairPage = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // Fetch registered user data
    axios
      .get("http://localhost:3011/Addproducts")
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
          <div
            key={product._id}
            className="justify-center items-center h-[300px] w-[230px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-transform duration-[0.2s] ease-[ease-in-out] bg-neutral-100 cursor-pointer ml-[130px] mt-[30px] rounded-[20px] border-2 border-solid border-[black] hover:scale-105 mr-[30vw]"
          >
            <Link to={`/Chair${index + 1}`} className="no-underline">
              <img
                src={`/src/assets/Chair/${product.imgpath}`} // Make sure the image path is correct
                alt={product.name}
                className="product-image"
              />
              <div className="product-details">
                <p className="text-1xl font-semibold">{product.name}</p>
                <p className="text-2xl">Price: {product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ChairPage;
