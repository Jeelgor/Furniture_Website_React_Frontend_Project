// ParentComponent.js
import React, { useState } from 'react';
import ProductCard from '../component/ProductCard';
import Sofa1 from './Sofa1';
import Cart from '../component/Cart';

const ParentComponent = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <Sofa1 addToCart={addToCart} />
      {/* Add more components as needed */}

      <Cart cart={cart} />
    </div>
  );
};

export default ParentComponent;
