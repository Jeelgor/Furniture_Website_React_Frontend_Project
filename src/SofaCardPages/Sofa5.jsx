import ProductCard from '../component/ProductCart';

import sofa5 from '../assets/Sofaimg/sofa5.png';

const Sofa5 = () => {
    return (
        <>
            <ProductCard
                name="Single Attractive Sofa"
                price={62000}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                image={sofa5}
            />

        </>
    );
};

export default Sofa5;
