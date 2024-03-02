// CartPage.js
import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Navbarf from "./Navbarframe";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  // Calculate total amount
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Remove item from cart
  const removeItem = (index) => {
    removeFromCart(index);
  };

  return (
    <div className="px-8 py-4">
      <Navbarf />

      <h1 className="text-3xl text-center mb-8">Shopping Cart</h1>

      <table className="w-full mb-8 border-collapse">
        <thead className="text-center">
          <tr className="border border-solid border-gray-300">
            <th className="p-2 border border-solid border-gray-300">Image</th>
            <th className="p-2 border border-solid border-gray-300">Name</th>
            <th className="p-2 border border-solid border-gray-300">Total Price</th>
            <th className="p-2 border border-solid border-gray-300">Quantity</th>
            <th className="p-2 border border-solid border-gray-300">Remove Item</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="p-2"><img src={item.image} /></td>
              <td className="p-2">{item.name}</td>
              <td className="p-2">₹{(item.price * item.quantity).toFixed(2)}</td>
              <td className="p-2">{item.quantity}</td>
              <td className="p-2">
                <button
                  onClick={() => removeItem(index)}
                  className="px-4 py-2 text-white bg-blue-500 border border-solid border-blue-700 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-center">
        <p className="text-xl font-bold">Total Amount: ₹{totalAmount.toFixed(2)}</p>
        <Link to="/CheckOutPage">
          <button className="mt-4 px-8 py-3 bg-blue-900 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Check Out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
