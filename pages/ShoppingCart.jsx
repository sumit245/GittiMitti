import React from "react";
import "./ShoppingCart.css"; // Import your CSS file if you have styles

// ShoppingCart component
const ShoppingCart = () => {
  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <p>Deselect all items</p>
      <h2>Price</h2>
      <div className="divider"></div>
      <CartItem
        image="https://5.imimg.com/data5/SELLER/Default/2023/2/UI/VE/MM/34720181/screenshot-49-500x500.png"
        name="Grey River Sand Balu, For Construction"
        price="₹ 20150.00"
        stock="In stock"
        seller="Sold by Organic Products Inc"
        subtotal="₹ 150.0"
      />
    </div>
  );
};

// CartItem component
const CartItem = ({ image, name, price, stock, seller, subtotal }) => {
  return (
    <div className="shopping-item">
      <img src={image} alt={name} />
      <div className="item-details">
        <p>{name}</p>
        <h1>{price}</h1>
        <div className="item-stock">
          <h2>{stock}</h2>
          <h3>{seller}</h3>
          <h4>Gift options not available. Learn more</h4>
        </div>
      </div>
      <div className="item-subtotal">
        <p>Subtotal (1 item): {subtotal}</p>
      </div>
    </div>
  );
};

// Subtotal component
const Subtotal = ({ total }) => {
  return (
    <div className="cart-subtotal">
      <div className="subtotal-price">
        <p>Subtotal (1 item):</p>
        <h1>{total}</h1>
      </div>
      <button>View Menu</button>
    </div>
  );
};

// Main App component
const ShoppingCartApp = () => {
  return (
    <div className="shopping-cart-app">
      <ShoppingCart />
      <div className="additional-cart">
        <h1>Shopping Cart</h1>
        <p>Deselect all items</p>
        <h2>Price</h2>
        <div className="divider"></div>
        <CartItem
          image="https://5.imimg.com/data5/IH/XN/OT/ANDROID-87275188/product-jpeg-1000x1000.jpg"
          name="Black Stone Gitti, For Building, Size: 30mm 20mm 10mm"
          price="₹ 6050.00"
          stock="In stock"
          seller="Sold by Organic Products Inc"
          subtotal="₹ 6050.0"
        />
      </div>
      <Subtotal total="₹ 1050.00" />
    </div>
  );
};

export default ShoppingCartApp;
