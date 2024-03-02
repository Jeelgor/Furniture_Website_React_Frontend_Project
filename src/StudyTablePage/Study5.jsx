import React from 'react'
import ProductCard from '../component/ProductCart';
import study5 from "../assets/StudyTable/Study5.png"
 const Study5 = () => {
    return (
        <>
          <ProductCard
            name="Single Attractive Sofa"
            price={2999}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image={study5}
          />
        </>
      );
}
export default Study5;