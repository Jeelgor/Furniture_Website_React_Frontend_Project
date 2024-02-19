import React from 'react';
import ProductCard from '../component/ProductCart';
import chair3 from '../assets/Chair/chair3.png';

export const Chair4 = () => {
    return (
        <ProductCard
        name="Single Attractive Sofa"
        price={2999}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image={chair3}
      />
    )
}
export default Chair4;
