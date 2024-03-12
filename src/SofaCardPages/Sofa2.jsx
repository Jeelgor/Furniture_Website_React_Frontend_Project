import ProductCard from '../component/ProductCart';

import sofa2 from '../assets/Sofaimg/sofa2.png';
import React from 'react';

const Sofa2 = () => {
    return (
        <>
            <ProductCard
                name="Single Attractive Sofa"
                price={44000}
                description="
                Introducing the epitome of comfort and style, our luxurious sofa collection seamlessly blends contemporary elegance with unparalleled coziness. Crafted with meticulous attention to detail, each sofa is a testament to both form and function, making it the perfect centerpiece for any modern living space."
                image={sofa2}
            />

        </>
    );
};

export default Sofa2;
