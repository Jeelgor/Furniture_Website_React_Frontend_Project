
// ProductCard.js
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";
import Navbarf from "./Navbarframe";

const ProductCard = ({ name, price, description, image }) => {
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    if (quantity < 7) {
      setQuantity(quantity + 1);
      toast.success("Quantity Updated");
    } else {
      toast.error("Maximum quantity reached (7)");
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      toast.error("Quantity Updated");
    }
  };

  const calculateTotalPrice = () => {
    return quantity * price;
  };

  const handleAddToCart = () => {
    addToCart({ image, name, price, quantity: quantity });
    toast.success(`${name} added to cart!`);
  };

  return (
    <>
      <Navbarf />
      <div className="flex justify-center items-center">
        <div className="p-16 w-4/5 flex justify-between border border-black rounded-3xl">
          <div className="left-side">
            <div className="imageClass">
              <Image
                src={image}
                alt={`${name} Logo`}
                className="h-[15vw] w-[60vw] "
              />
            </div>
          </div>
          <div className="right-side">
            <h2 className="ml-[120px] text-3xl font-bold">{name}</h2>
            <p className="ml-[110px] mt-[20px] font-medium ">Description: {description}</p>
            <div className="price ml-[230px]">
              <div className="PRICEwIthCurrency">
                <p className="text-2xl  mt-[40px]">
                  Price: {calculateTotalPrice().toFixed(2)}{" "}
                </p>
              </div>
              <div className="flex mb-7">
                <button
                  type="button"
                  className="bg-blue-600 px-9 rounded-3xl"
                  onClick={handleDecrement}
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  className="text-center w-1/3 text-xl"
                  readOnly
                />
                <button
                  type="button"
                  className="bg-blue-600 px-9 rounded-3xl"
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="bg-blue-800 text-white h-1/6 w-full border-black border rounded-3xl"
              type="submit"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

          </div>
        </div>
      </div>
      <div>
        {/* Include Footer component here if needed */}
      </div>
    </>
  );
};

export default ProductCard;



// // ProductCard.js
// import "../Styles/AddToCart.css";
// import { Image } from "react-bootstrap";
// import React, { useState } from "react";
// import Footer from "./Footer";
// import toast from "react-hot-toast";
// import { useCart } from "../context/CartContext";
// import Navbarf from "./Navbarframe";

// const ProductCard = ({ name, price, description, image }) => {
//   const { addToCart } = useCart();

//   const [quantity, setQuantity] = useState(1);

//   // const handleIncrement = () => {
//   //   setQuantity(quantity + 1);
//   //  if (setQuantity==5) {
//   //    setQuantity()
//   //  }
//   //   toast.success("Quantity Updated");
//   // };

//   const handleIncrement = () => {
//     if (quantity < 7) {
//       setQuantity(quantity + 1);
//       toast.success("Quantity Updated");
//     } else {
//       toast.error("Maximum quantity reached (7)");
//     }
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//       toast.error("Quantity Updated");
//     }
//   };

//   const calculateTotalPrice = () => {
//     return quantity * price;
//   };

//   const handleAddToCart = () => {
//     addToCart({ image,name, price, quantity: quantity });
//     toast.success(`${name} added to cart!`);
//   };

//   return (
//     <>
//     <Navbarf/>
//       <div className="Outerclass2">
//         <div className="container2">
//           <div className="left-side">
//             <div className="imageClass">
//               <Image
//                 src={image}
//                 alt={`${name} Logo`}
//                 className="AddToCartImg"
//               />
//             </div>
//           </div>
//           <div className="right-side">
//             <h2>{name}</h2>
//             <p>Description: {description}</p>
//             <div className="PRICEANDQUN">
//               <div className="price">
//                 <div className="PRICEwIthCurrency">
//                   <p className="PRICEValue">
//                     Price: {calculateTotalPrice().toFixed(2)}{" "}
//                   </p>
//                 </div>
//                 <div className="quantity">
//                   <button
//                     type="button"
//                     className="btn btn-primary counter inc"
//                     onClick={handleDecrement}
//                   >
//                     -
//                   </button>
//                   <input
//                     type="text"
//                     value={quantity}
//                     className="counterValue"
//                     readOnly
//                   />
//                   <button
//                     type="button"
//                     className="btn btn-primary counter dec"
//                     onClick={handleIncrement}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <button
//               className="AddToCartBtn"
//               type="submit"
//               onClick={handleAddToCart}
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default ProductCard;
