import ProductCard from '../component/ProductCart';

import sofa3 from '../assets/Sofaimg/sofa3.png';
import React, { useEffect, useState } from 'react';
// import Sofa4 from './Sofa4';


const Sofa3 = () => {
    // const [Sofa3,setSofa3] = useState();
    // useEffect(()=>{
    //     axios.get('http://localhost/3011/Sofas')
    //     .then((response)=>setSofa3(response.data))
    //     .catch((err)=>console.log(err));
    // },[]);
    return (
        <>
            {/* {
            Sofa3.map((Sofa3, index) => (
                <ProductCard name={Sofa3.name} price={Sofa3.price} description={Sofa3.description}/>
            ))
            
        } */}
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
