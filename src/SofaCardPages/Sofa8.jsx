import ProductCard from '../component/ProductCart';

import sofa8 from '../assets/Sofaimg/sofa8.png';
import React from 'react';

const Sofa8 = () => {
    return (
        <>
            <ProductCard
                name="Single Attractive Sofa"
                price={10000}
                description="
                Introducing the epitome of comfort and style, our luxurious sofa collection seamlessly blends contemporary elegance with unparalleled coziness. Crafted with meticulous attention to detail, each sofa is a testament to both form and function, making it the perfect centerpiece for any modern living space."
                image={sofa8}
            />

        </>
    );
};

export default Sofa8;
