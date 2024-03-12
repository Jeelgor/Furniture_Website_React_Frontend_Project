import React from 'react';
import ProductCard from '../component/ProductCart';
import chair7 from '../assets/Chair/chair7.png';

export const Chair7 = () => {
    return (
        <ProductCard
        name="Chair"
        price={9000}
        description="About Material & Finish: Made of high-quality Metal, this lounge chair is sturdy in nature and offers long-lasting durability. In the same product, there are enormous prints and color options available to choose from!

        Manufacturing Details & Stringent Quality Checks: We use fully automated machinery to produce our goods with the utmost accuracy and perfection. Before it reaches your door, the finished product must pass strict quality control inspections."
        image={chair7}
      />
    )
}
export default Chair7;
