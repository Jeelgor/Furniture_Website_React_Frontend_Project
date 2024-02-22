import React from 'react';
import ProductCard from '../component/ProductCart';
import chair5 from '../assets/Chair/chair5.png';

export const Chair5 = () => {
    return (
        <ProductCard
        name="Single Attractive Sofa"
        price={2999}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image={chair5}
      />
    )
}
export default Chair5;
