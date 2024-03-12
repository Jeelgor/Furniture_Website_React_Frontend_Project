import React from 'react';
import chair1 from "../assets/Chair/chair1.png";
import ProductCard from '../component/ProductCart';

export const Chair1 = () => {
    return (
        <ProductCard
        name="Carolina Lounge Chair"
        price={3000}
        description="About Material & Finish: Made of high-quality Metal, this lounge chair is sturdy in nature and offers long-lasting durability. In the same product, there are enormous prints and color options available to choose from!

        Manufacturing Details & Stringent Quality Checks: We use fully automated machinery to produce our goods with the utmost accuracy and perfection. Before it reaches your door, the finished product must pass strict quality control inspections."
        image={chair1}
      />
    )
}
export default Chair1;