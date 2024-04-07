import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Product.css';
import { doFetchProducts } from './product.actions';
import { addToCart } from './../cart/cartSlice';

function Products() {
  // const { addToCart } = useCart();

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(doFetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch the addToCart action with the product as payload
  };

  return (
    <div className="product-list">
      {products && products.products.map(product => (
        <div key={product.id} className="product">
          <img className='product-img' src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;