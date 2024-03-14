import React from 'react';
import ProductCard from '../component/ProductCart';
import chair4 from '../assets/Chair/chair4.png';

export const Chair4 = () => {
    return (
        <ProductCard
        name="Chair"
        description="About Material & Finish: Made of high-quality Metal, this lounge chair is sturdy in nature and offers long-lasting durability. In the same product, there are enormous prints and color options available to choose from!

        Manufacturing Details & Stringent Quality Checks: We use fully automated machinery to produce our goods with the utmost accuracy and perfection. Before it reaches your door, the finished product must pass strict quality control inspections."
        image={chair4}
      />
    )
}
export default Chair4;
