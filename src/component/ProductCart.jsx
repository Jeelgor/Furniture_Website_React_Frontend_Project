// ProductCard.js
import "../Styles/AddToCart.css";
import { Image } from "react-bootstrap";
import React, { useState } from "react";
import Footer from "./Footer";
import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";

const ProductCard = ({ name, price, description, image }) => {
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    toast.success("Quantity Updated");
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
    addToCart({ image,name, price, quantity: quantity });
    toast.success(`${name} added to cart!`);
  };

  return (
    <>
      <div className="Outerclass2">
        <div className="container2">
          <div className="left-side">
            <div className="imageClass">
              <Image
                src={image}
                alt={`${name} Logo`}
                className="AddToCartImg"
              />
            </div>
          </div>
          <div className="right-side">
            <h2>{name}</h2>
            <p>Description: {description}</p>
            <div className="PRICEANDQUN">
              <div className="price">
                <div className="PRICEwIthCurrency">
                  <p className="PRICEValue">
                    Price: {calculateTotalPrice().toFixed(2)}{" "}
                  </p>
                </div>
                <div className="quantity">
                  <button
                    type="button"
                    className="btn btn-primary counter inc"
                    onClick={handleDecrement}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    className="counterValue"
                    readOnly
                  />
                  <button
                    type="button"
                    className="btn btn-primary counter dec"
                    onClick={handleIncrement}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <button
              className="AddToCartBtn"
              type="submit"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default ProductCard;
