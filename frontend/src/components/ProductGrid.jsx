import React, { useState, useEffect } from 'react';
import './ProductGrid.css';

// 1. Keep one local image just as a fallback in case a product has no photos
import fallbackImage from '../assets/black-1.webp'; 

const ProductGrid = () => {
  // 2. The memory to hold the products from MongoDB
  const [products, setProducts] = useState([]);

  // 3. Fetch the data as soon as the Home Page loads
  useEffect(() => {
    const fetchHomeProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        
        // 🔥 The Magic: .slice(0, 6) grabs only the first 6 products!
        setProducts(data.slice(0, 6)); 
      } catch (error) {
        console.log("Error fetching home page products:", error);
      }
    };

    fetchHomeProducts();
  }, []);

  return (
    <div className="product-section">
      <div className="grid-container">
        
        {/* 4. Loop through the REAL database products */}
        {products.map((product) => (
          <div className="product-card" key={product._id}>
            
            <div className="image-box">
              {/* Checks if Cloudinary images exist. If yes, show the 1st one. If no, show fallback. */}
              <img 
                src={product.images && product.images.length > 0 ? product.images[0] : fallbackImage} 
                alt={product.name} 
              />
            </div>
            
            <div className="product-info">
              <h3 className="product-title">{product.name}</h3>
              
              {/* Pulling the shortDescription we defined in your MongoDB schema */}
              <p className="product-desc">{product.shortDescription}</p>
              
              {/* Adding the LKR text dynamically next to the database number */}
              <p className="product-price">LKR {product.price}</p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default ProductGrid;