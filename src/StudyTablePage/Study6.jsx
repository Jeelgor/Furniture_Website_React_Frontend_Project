import React from 'react'
import ProductCard from '../component/ProductCart';
import study6 from "../assets/StudyTable/Study6.png"
 const Study6 = () => {
    return (
        <>
          <ProductCard
            name="Single Attractive Sofa"
            price={2999}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image={study6}
          />
        </>
      );
}
export default Study6;