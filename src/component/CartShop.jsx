// CartPage.js
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbarf from "./Navbarframe";
import axios from "axios";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const [name, Setname] = useState("");
  const [price, Setprice] = useState("");
  const [quantity, Setquantity] = useState("");
  const [imgpath, Setimgpath] = useState("");
  const navigate = useNavigate();
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const removeItem = (index) => {
    removeFromCart(index);
  };
  // const handleCheckOut = async (e) => {
  //   try {
  //     e.preventDefault();

  //     // Assuming you want to get the last item in the cart
  //     const lastCartItem = cart[cart.length - 1];

  //     await axios.post('http://localhost:3011/checkout', {
  //       name: lastCartItem.name,
  //       price: lastCartItem.price,
  //       quantity: lastCartItem.quantity,
  //       imgpath: lastCartItem.image, // Assuming 'image' is the property in your cart item containing the image path
  //     });

  //     localStorage.clear();
  //   } catch (error) {
  //     console.error('Error during checkout:', error);
  //   }
  // };

  const handleCheckOut = async (e) => {
    try {
      e.preventDefault();

      // Assuming you want to get the last item in the cart
      const lastCartItem = cart[cart.length - 1];

      axios.post('http://localhost:3011/checkout', {
        name: lastCartItem.name,
        price: lastCartItem.price,
        quantity: lastCartItem.quantity,
        imgpath: lastCartItem.image
      })
        .then(result => {
          console.log(result);
          navigate('/HomePage')
          localStorage.clear()
        })
        .catch(err => console.log(err));
      localStorage.clear()

    } catch (error) {
      console.error('Error during checkout:', error);
    }
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
              <td className="p-2">{item.name} </td>
              <td className="p-2">₹{(item.price * item.quantity).toFixed(2)}</td>
              <td className="p-2">{item.quantity} </td>
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
          <button
            onClick={handleCheckOut}
            className="mt-4 px-8 py-3 bg-blue-900 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Check Out
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
