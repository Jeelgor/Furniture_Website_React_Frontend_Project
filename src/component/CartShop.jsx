// CartPage.js
import React from 'react';
import { useCart } from '../context/CartContext';
import '../Styles/CartShop.css';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  // Calculate total amount
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Remove item from cart
  const removeItem = (index) => {
    removeFromCart(index);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <table>
        <thead className="tex1">
          <tr className="tex1">
            <th className="tex1">Image</th>
            <th className="tex1">Name</th>
            <th className="tex1">Price</th>
            <th className="tex1">Quantity</th>
            <th className="tex1">Remove Item</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.sofa1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <button
                  onClick={() => removeItem(index)}
                  style={{ color: 'blue', border: '2px solid black', backgroundColor: 'skyblue' }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="totalAmount">
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartPage;
