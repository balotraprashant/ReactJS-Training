import React, { useState, useEffect } from 'react';
import './Products.css';
import { useCart } from '../../context/CartContext';

function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className='products'>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <img className='product-img' src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;