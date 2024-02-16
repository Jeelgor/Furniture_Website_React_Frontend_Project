import ProductCard from '../component/ProductCart';

import sofa2 from '../assets/Sofaimg/sofa2.png';

const Sofa2 = () => {
    return (
        <>
            <ProductCard
                name="Single Attractive Sofa"
                price={44000}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                image={sofa2}
            />

        </>
    );
};

export default Sofa2;
