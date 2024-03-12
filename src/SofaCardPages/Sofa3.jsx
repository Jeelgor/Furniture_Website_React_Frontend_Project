import ProductCard from '../component/ProductCart';

import sofa3 from '../assets/Sofaimg/sofa3.png';
import React from 'react';

const Sofa3 = () => {
    return (
        <>
            <ProductCard
                name="Sofa"
                price={30000}
                description="
                Introducing the epitome of comfort and style, our luxurious sofa collection seamlessly blends contemporary elegance with unparalleled coziness. Crafted with meticulous attention to detail, each sofa is a testament to both form and function, making it the perfect centerpiece for any modern living space."
                image={sofa3}
            />

        </>
    );
};

export default Sofa3;
