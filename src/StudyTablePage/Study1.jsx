import React from 'react'
import ProductCard from '../component/ProductCart';
import study1 from "../assets/StudyTable/Study1.png"

 const Study1 = () => {
    return (
        <>
          <ProductCard
            name="Single Attractive Sofa"
            price={2999}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image={study1}
          />
        </>
      );
}
export default Study1;