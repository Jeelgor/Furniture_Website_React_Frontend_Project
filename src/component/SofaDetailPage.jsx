// SofaDetailPage.jsx
import React from "react";

const SofaDetailPage = ({ sofa }) => {
  const { title, price, description, image } = sofa;

  const addToCart = () => {
    // Implement your logic to add the sofa to the cart (use context or other state management).
    console.log(`Sofa ${title} added to the cart`);
  };

  return (
    <div>
      <img src={image} alt={title} className="w-96 h-96" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price: {price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default SofaDetailPage;
