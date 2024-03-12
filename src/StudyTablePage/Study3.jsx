import React from 'react'
import ProductCard from '../component/ProductCart';
import study3 from "../assets/StudyTable/Study3.png"
 const Study3= () => {
    return (
        <>
          <ProductCard
            name="Study Table"
            price={5000}
            description="
            Introducing the ultimate study companion – our meticulously designed study tables cater to the needs of the modern scholar, combining functionality with a touch of contemporary aesthetics. Crafted with precision and tailored for optimal productivity, our study tables redefine the study experience."
            image={study3}
          />
        </>
      );
}
export default Study3;