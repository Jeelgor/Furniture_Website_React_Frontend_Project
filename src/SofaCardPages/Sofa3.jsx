import ProductCard from '../component/ProductCart';

import sofa3 from '../assets/Sofaimg/sofa3.png';

const Sofa3 = () => {
    return (
        <>
            <ProductCard
                name="Sofa"
                price={55000}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                image={sofa3}
            />

        </>
    );
};

export default Sofa3;
