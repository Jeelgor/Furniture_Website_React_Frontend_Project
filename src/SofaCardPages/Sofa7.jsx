import ProductCard from '../component/ProductCart';

import sofa7 from '../assets/Sofaimg/sofa7.png';
import React from 'react';

const Sofa7 = () => {
    return (
        <>z
            <ProductCard
                name="Single Attractive Sofa"
                price={99000}
                description="
                Introducing the epitome of comfort and style, our luxurious sofa collection seamlessly blends contemporary elegance with unparalleled coziness. Crafted with meticulous attention to detail, each sofa is a testament to both form and function, making it the perfect centerpiece for any modern living space."
                image={sofa7}
            />

        </>
    );
};

export default Sofa7;
