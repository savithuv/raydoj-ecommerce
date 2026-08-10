import React from 'react';
import './ProductGrid.css';

// 1. Import your friend's images from the assets folder
import blackWallet from '../assets/black-1.webp'; // Adjust to .png if they are PNGs
import brownWallet from '../assets/image1.webp';
import redWallet from '../assets/image6.webp'; // Using one of the other images for variety

const ProductGrid = () => {
  // 2. Your Product Data (Easy to add more later up to 6!)
  const products = [
    {
      id: 1,
      name: "LEO Wallet - Black Buffalo Leather Edition",
      description: "Premium baffolow leather",
      price: "LKR 24,600",
      image: blackWallet
    },
    {
      id: 2,
      name: "LEO Wallet - Classic Brown Leather Edition",
      description: "Premium baffolow leather",
      price: "LKR 24,600",
      image: brownWallet
    },
    {
      id: 3,
      name: "LEO Wallet - Signature Red Leather Edition",
      description: "Premium baffolow leather",
      price: "LKR 24,600",
      image: redWallet
    }
  ];

  return (
    <div className="product-section">
      {/* 3. The CSS Grid Container */}
      <div className="grid-container">
        
        {/* 4. We use .map() to loop through your product list and create a card for each one */}
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            
            <div className="image-box">
              <img src={product.image} alt={product.name} />
            </div>
            
            <div className="product-info">
              <h3 className="product-title">{product.name}</h3>
              <p className="product-desc">{product.description}</p>
              <p className="product-price">{product.price}</p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default ProductGrid;