import React from 'react';
import ProductCard from '../component/ProductCart';
import chair7 from '../assets/Chair/chair7.png';

export const Chair7 = () => {
    return (
        <ProductCard
        name="Single Attractive Sofa"
        price={2999}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image={chair7}
      />
    )
}
export default Chair7;
