import ProductCard from '../component/ProductCart';

import sofa6 from '../assets/Sofaimg/Sofa6.png';
import React from 'react';

const Sofa6 = () => {
    return (
        <>
            <ProductCard
                name="Single Attractive Sofa"
                price={8000}
                description="
                Introducing the epitome of comfort and style, our luxurious sofa collection seamlessly blends contemporary elegance with unparalleled coziness. Crafted with meticulous attention to detail, each sofa is a testament to both form and function, making it the perfect centerpiece for any modern living space."
                image={sofa6}
            />

        </>
    );
};

export default Sofa6;
