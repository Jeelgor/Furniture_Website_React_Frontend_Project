import React from 'react';
import ProductCard from '../component/ProductCart';
import chair6 from '../assets/Chair/chair6.png';

export const Chair6 = () => {
    return (
        <ProductCard
        name="Single Attractive Sofa"
        price={2999}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image={chair6}
      />
    )
}
export default Chair6;
