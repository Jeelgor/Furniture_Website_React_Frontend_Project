import ProductCard from '../component/ProductCart';

import sofa8 from '../assets/Sofaimg/sofa8.png';

const Sofa8 = () => {
    return (
        <>
            <ProductCard
                name="Single Attractive Sofa"
                price={22000}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                image={sofa8}
            />

        </>
    );
};

export default Sofa8;
