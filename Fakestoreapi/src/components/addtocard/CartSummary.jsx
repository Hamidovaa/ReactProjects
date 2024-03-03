import React, { useState } from 'react';
import "../addtocard/cart-summary.scss";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, decrementQuantity } from '../redux/slices/cartSlice';



const CartSummary = ({ product, cart}) => {
   
  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

 
const getCartFromLocalStorage = () => {
  const cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : null;
};

  const dispatch = useDispatch();


  const [carts, setCart] = useState({
    items: [],
    total: 0,  
  });

  console.log(product)

  const addToCartHandler = (productItem) => {
    dispatch(addToCart(productItem)); 
    saveCartToLocalStorage(cart);
  };

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(product.id));
    saveCartToLocalStorage(cart);
  };

  const decrementQuantityHandler = () => {
    dispatch(decrementQuantity(product.id)); 
    saveCartToLocalStorage(cart);
  };

  const cartItems = cart.items.map((item) => (
    <div key={item.id}>
      <img src={item.image} alt="" />
      <p>{item.title}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Price: {item.price * item.quantity}</p>
      <button onClick={() => addToCartHandler(item)}>+</button>
      <button onClick={() =>decrementQuantityHandler(item.id)}>-</button>
    </div>
  ));

  const total = cart.total;

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems}
          <p>Total: {total.toFixed(2)}</p>
          <button>Checkout</button>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default CartSummary;

