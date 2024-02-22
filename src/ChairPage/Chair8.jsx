import React from 'react';
import ProductCard from '../component/ProductCart';
import chair8 from '../assets/Chair/chair8.png';

export const Chair8 = () => {
    return (
        <ProductCard
        name="Single Attractive Sofa"
        price={2999}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image={chair8}
      />
    )
}
export default Chair8;
