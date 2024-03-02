import React from 'react'
import ProductCard from '../component/ProductCart';
import study2 from "../assets/StudyTable/Study2.png"
 const Study2 = () => {
    return (
        <>
          <ProductCard
            name="Single Attractive Sofa"
            price={2999}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image={study2}
          />
        </>
      );
}
export default Study2;