import "../Styles/AddToCart.css";
import { Image } from "react-bootstrap";
import sofa1 from '../assets/Sofaimg/sofa1.png';
import Rupees from '../assets/rupee.png';
 import React, { useState } from 'react';
 import Footer  from '../component/Footer';

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(2999); // Initial price

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    // Calculate new price based on quantity
    setPrice((quantity + 1) * 2999); // Assuming the price is $99.99
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      // Calculate new price based on quantity
      setPrice((quantity - 1) * 2999); // Assuming the price is $99.99
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} items to cart. Total price: $${price.toFixed(2)}`);
  };

  return (
    <>
   {/* //this is   code */}
   
    <div className="Outerclass2">
    <div className="container2">
      <div className="left-side">
      <div className="imageClass">
        <Image src={sofa1} alt="SofaLogo" className="AddToCartImg" />
    </div>
      </div>
      <div className="right-side">
        <h2>Single Attractive Sofa</h2>
        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="PRICEANDQUN">
        <div className="price">
            <div className="PRICEwIthCurrency">
            <p className="PRICEValue">Price: {price.toFixed(2)}  </p>
         <p className="RupeesIcon"> <Image  src={Rupees}></Image></p>
            </div>
        
          <div className="quantity">
            <button type="button" className="btn btn-primary counter inc" onClick={handleDecrement} >-</button>
            <input type="text" value={quantity} className="counterValue" readOnly />
            <button type="button" className="btn btn-primary counter dec" onClick={handleIncrement}>+</button>
          </div>
          
        </div>
        </div>
        <button className="AddToCartBtn" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
    </div>
    <div>
      <Footer></Footer>
    </div>
    </>
  );
};

export default AddToCart;
