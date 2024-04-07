import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Product.css';
import { useCart } from '../../context/CartContext';
import { doFetchProducts } from './product.actions';

function Products() {
  // const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(doFetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.products);

  const handleAddToCart = (product) => {
    addToCart(product);
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