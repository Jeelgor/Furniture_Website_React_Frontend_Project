import React from 'react'
import ProductCard from '../component/ProductCart';
import study4 from "../assets/StudyTable/Study4.png"
 const Study4 = () => {
    return (
        <>
          <ProductCard
            name="Single Attractive Sofa"
            price={2999}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image={study4}
          />
        </>
      );
}
export default Study4;