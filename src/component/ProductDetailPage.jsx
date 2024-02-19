// ProductDetailPage.js
import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../component/ProductCart";
import Navbarf from "../component/Navbarframe";

const ProductDetailPage = () => {
  const { productId } = useParams();

  // Dummy product data, replace this with your actual data source
  const products = {
    product1: {
      name: "Product 1",
      price: 50.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "path/to/product1-image.jpg",
    },
    // Add data for other products
  };

  const product = products[productId];

  if (!product) {
    // Handle case where product is not found
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbarf />
      <ProductCard {...product} />
    </>
  );
};

export default ProductDetailPage;
