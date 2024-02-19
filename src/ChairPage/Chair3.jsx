import React from 'react';
import ProductCard from '../component/ProductCart';
import chair2 from '../assets/Chair/chair2.png';

export const Chair3 = () => {
    return (
        <ProductCard
        name="Single Attractive Sofa"
        price={2999}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image={chair2}
      />

    )
}
export default Chair3;