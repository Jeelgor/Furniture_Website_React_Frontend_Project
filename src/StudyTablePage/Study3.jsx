import React from 'react'
import ProductCard from '../component/ProductCart';
import study3 from "../assets/StudyTable/Study3.png"
 const Study3= () => {
    return (
        <>
          <ProductCard
            name="Single Attractive Sofa"
            price={2999}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image={study3}
          />
        </>
      );
}
export default Study3;