import React from 'react';
import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div className='cart'>
      <h1>Cart Items</h1>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) :
          (cartItems.map(cartItem => (
            <div key={cartItem.id} className="product">
              <img className='product-img' src={cartItem.image} alt={cartItem.title} />
              <h3>{cartItem.title}</h3>
              <p>Price: ${cartItem.price}</p>
              <button>Remove</button>
            </div>
          )))}
      </div>
    </div>
  );
};

export default Cart;