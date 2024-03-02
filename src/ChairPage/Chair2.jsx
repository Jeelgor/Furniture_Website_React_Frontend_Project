import React from 'react';
import chair2 from "../assets/Chair/chair2.png";

import ProductCard from '../component/ProductCart';

export const Chair2 = () => {
    return (
        <ProductCard
        name="Single Attractive Sofa"
        price={2999}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image={chair2}
      />
    )
}
export default Chair2;