import ProductCard from '../component/ProductCart';

import sofa6 from '../assets/Sofaimg/Sofa6.png';

const Sofa6 = () => {
    return (
        <>
            <ProductCard
                name="Single Attractive Sofa"
                price={78000}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                image={sofa6}
            />

        </>
    );
};

export default Sofa6;
