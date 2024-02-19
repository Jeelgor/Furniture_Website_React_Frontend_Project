import ProductCard from '../component/ProductCart';
import sofa1 from '../assets/Sofaimg/sofa1.png';


const Sofa1 = () => {
  
  return (
    <>
      <ProductCard
        name="Single Attractive Sofa"
        price={2999}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image={sofa1}
      />
    </>
  );
};

export default Sofa1;