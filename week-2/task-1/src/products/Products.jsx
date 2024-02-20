import React, { useState, useEffect } from 'react';

function Products() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addToCart = () => {
    setCartItems(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Cart Items: {cartItems}</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;