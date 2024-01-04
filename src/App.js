import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

const App = () => {
    const [products, setProducts] = useState([
        {
            price: 99,
            title: "Watch",
            qty: 1,
            img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
            id: 1,
        },
        {
            price: 999,
            title: "Mobile Phone",
            qty: 10,
            img: "https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1306&q=80",
            id: 2,
        },
        {
            price: 999,
            title: "Laptop",
            qty: 4,
            img: "https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80",
            id: 3,
        },
    ]);

    const handleIncreaseQuantity = (product) => {
        setProducts((prevProducts) =>
            prevProducts.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p))
        );
    };

    const handleDecreaseQuantity = (product) => {
      setProducts((prevProducts) =>
          prevProducts.map((p) =>
              p.id === product.id ? { ...p, qty: Math.max(0, p.qty - 1) } : p
          )
      );
  };
  

    const handleDeleteProduct = (id) => {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    };

    const getCartCount = () => {
        return products.reduce((count, product) => count + product.qty, 0);
    };

    const getCartTotal = () => {
        return products.reduce((total, product) => total + product.qty * product.price, 0);
    };

    return (
        <div className="App">
            <Navbar count={getCartCount()} />
            <Cart
                products={products}
                onIncreaseQuantity={handleIncreaseQuantity}
                onDecreaseQuantity={handleDecreaseQuantity}
                onDeleteProduct={handleDeleteProduct}
            />
            <div style={{ padding: 10, fontSize: 20 }}>TOTAL: {getCartTotal()} </div>
        </div>
    );
};

export default App;
