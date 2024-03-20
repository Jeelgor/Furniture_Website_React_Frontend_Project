import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    // Load cart data from localStorage on component mount
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const [cart, setCart] = useState(storedCart);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };
    const removeFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };
    useEffect(() => {
        // Save cart data to localStorage whenever the cart changes
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart,removeFromCart  }}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export { CartProvider, useCart };


