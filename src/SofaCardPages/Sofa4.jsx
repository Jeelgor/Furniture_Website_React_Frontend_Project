import ProductCard from '../component/ProductCart';

import sofa4 from '../assets/Sofaimg/sofa4.png';
import React from 'react';

const Sofa4 = () => {
    return (
        <>
            <ProductCard
                name="Single Attractive Sofa"
                price={66000}
                description="
                Introducing the epitome of comfort and style, our luxurious sofa collection seamlessly blends contemporary elegance with unparalleled coziness. Crafted with meticulous attention to detail, each sofa is a testament to both form and function, making it the perfect centerpiece for any modern living space."
                image={sofa4}
            />

        </>
    );
};

export default Sofa4;
