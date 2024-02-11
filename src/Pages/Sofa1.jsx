import React from "react";
import AddToCart from "../component/Product_detail_ReusePage";
import sofa1 from "../assets/Sofaimg/sofa1.png";
const Sofa1 = () => {
    return (
        <div>
            <AddToCart
                Imagesrc={sofa1}
                Heading={"Single Seat Sofa"}
                description={
                    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nulla "
                }
            />

        </div>
    );
};
export default Sofa1;
