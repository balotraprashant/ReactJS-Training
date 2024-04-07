import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from './cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product)); // Dispatch the removeFromCart action with the product as payload
  };

  // return (
  //   <div className='cart'>
  //     <h1>Cart Items</h1>
  //     <div className="cart-items">
  //       {cartItems.length === 0 ? (
  //         <p>Your cart is empty.</p>
  //       ) :
  //         (cartItems.map(cartItem => (
  //           <div key={cartItem.id} className="product">
  //             <img className='product-img' src={cartItem.image} alt={cartItem.title} />
  //             <h3>{cartItem.title}</h3>
  //             <p>Price: ${cartItem.price}</p>
  //             <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
  //           </div>
  //         )))}
  //     </div>
  //   </div>
  // );

  return (
    <div className='cart'>
      <h1>Cart Items</h1>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          // Use reduce to group items by id and count occurrences
          Object.values(cartItems.reduce((acc, cartItem) => {
            if (!acc[cartItem.id]) {
              acc[cartItem.id] = { ...cartItem, count: 1 };
            } else {
              acc[cartItem.id].count += 1;
            }
            return acc;
          }, {})).map(cartItem => (
            <div key={cartItem.id} className="product">
              <img className='product-img' src={cartItem.image} alt={cartItem.title} />
              <h3>{cartItem.title}</h3>
              <p>Price: ${cartItem.price}</p>
              <p>Count: {cartItem.count}</p>
              <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );  
};

export default Cart;