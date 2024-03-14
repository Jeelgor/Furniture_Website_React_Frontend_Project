import axios from "axios";
import React, { useEffect, useState } from "react";

const OrdersData = () => {
    const [product, setproduct] = useState([]);

    useEffect(() => {
        // Fetch registered user data
        axios
            .get("http://localhost:3011/admin/product")
            .then((response) => setproduct(response.data))
            .catch((error) => console.error(error));
    }, []);
    const handleDeleteProduct = (productId) => {
        axios
            .delete(`http://localhost:3011/admin/product/${productId}`)
            .then(() => {
                const updatedProducts = product.filter(
                    (product) => product._id !== productId
                );
                setproduct(updatedProducts);
            })
            .catch((error) => console.error(error));
    };

    return (
        <>
            <div className="text-3xl ml-[46vw]">OrdersData</div>
            <div className="container mx-auto p-4">
           {/* Display Product data */}
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {product.map((product) => (
                        <li key={product._id} className="bg-white p-4 rounded-md shadow-md">
                            <img src={product.imgpath} alt="" />
                            <p className="text-lg font-semibold mb-2">Name: {product.name}</p>
                            <p className="text-gray-600">Qty: {product.quantity}</p>
                            <p className="text-gray-600">Price: {product.price}</p>
                         
                            <div className="mt-4 space-x-2">
                                <button
                                    onClick={() => handleDeleteProduct(product._id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                                >
                                    Delete User
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
export default OrdersData;
