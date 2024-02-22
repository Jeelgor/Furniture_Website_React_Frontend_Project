import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext.jsx";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster position="top-right" /> {/* Add the Toaster here */}
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
