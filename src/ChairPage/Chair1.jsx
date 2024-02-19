import React from 'react';
import chair1 from "../assets/Chair/chair1.png";
import ProductCard from '../component/ProductCart';

export const Chair1 = () => {
    return (
        <ProductCard
        name="Single Attractive Sofa"
        price={2999}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image={chair1}
      />
    )
}
export default Chair1;