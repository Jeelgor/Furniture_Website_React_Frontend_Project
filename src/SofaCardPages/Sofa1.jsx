import ProductCard from '../component/ProductCart';
import sofa1 from '../assets/Sofaimg/sofa1.png';
import React from 'react';

const Sofa1 = () => {

  return (
    <>
      <ProductCard
        name="Single Attractive Sofa"
        price={33000}
        description="
        Introducing the epitome of comfort and style, our luxurious sofa collection seamlessly blends contemporary elegance with unparalleled coziness. Crafted with meticulous attention to detail, each sofa is a testament to both form and function, making it the perfect centerpiece for any modern living space."
        image={sofa1}
      />
    </>
  );
};

export default Sofa1;
