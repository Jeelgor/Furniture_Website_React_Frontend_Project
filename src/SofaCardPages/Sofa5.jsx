import ProductCard from '../component/ProductCart';

import sofa5 from '../assets/Sofaimg/sofa5.png';
import React from 'react';

const Sofa5 = () => {
    return (
        <>
            <ProductCard
                name="Single Attractive Sofa"
                price={7000}
                description="
                Introducing the epitome of comfort and style, our luxurious sofa collection seamlessly blends contemporary elegance with unparalleled coziness. Crafted with meticulous attention to detail, each sofa is a testament to both form and function, making it the perfect centerpiece for any modern living space."
                image={sofa5}
            />

        </>
    );
};

export default Sofa5;
