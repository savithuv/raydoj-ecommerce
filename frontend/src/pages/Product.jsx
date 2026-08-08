import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../productsData';
import './Product.css'; 

function Product() {
  const { id } = useParams();
  const currentId = id || "1";
  const product = products.find(p => p.id === currentId) || products[0];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false); // State to toggle long description
  const scrollRef = useRef(null);

  useEffect(() => {
    setSelectedIndex(0);
    setShowDetails(false); // Reset details view when switching products
  }, [product]);

  const mainImage = product.images[selectedIndex];

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <div className="page-wrapper">
      <div className="product-detail-container">
        
        {/* LEFT COLUMN: 5 THUMBNAILS + MAIN IMAGE */}
        <div className="product-images-section">
          <div className="thumbnail-column">
            {product.images.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt="thumb" 
                className={selectedIndex === index ? 'active' : ''} 
                onMouseEnter={() => setSelectedIndex(index)} 
              />
            ))}
          </div>
          
          <div className="main-image-container">
            <img src={mainImage} alt="Main Wallet" />
          </div>
        </div>

        {/* RIGHT COLUMN: DETAILS MATCHING FIGMA */}
        <div className="product-info-section">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-subtitle">{product.category}</p>
          
          <div className="price-box">
            <span className="price-old">{product.oldPrice}</span>
            <p className="price-new">{product.newPrice}</p>
          </div>

          <button className="btn-solid">Add Cart</button>
          <button className="btn-outline">Add Cart</button>

          <div className="description-text">
            <div className="info-block">
              <strong>Shipping</strong>
              <p>Free shipping island wide</p>
            </div>
            
            <div className="info-block">
              <strong>Pick Up</strong>
              <p>Free PickUp From Panadura Store or Colombo</p>
            </div>
            
            <p className="desc-paragraph">{product.description}</p>
            
            {/* Extended Details Section that appears when clicked */}
            {showDetails && (
              <p className="desc-paragraph" style={{ marginTop: '10px', color: '#333' }}>
                {product.details}
              </p>
            )}
            
            {/* Clicking this toggles the details open and closed */}
            <span 
              className="view-more-link" 
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Show Less Product Details" : "View More Product Details"}
            </span>
          </div>
        </div>

      </div>

      {/* MORE FROM THE STORE SECTION */}
      <div className="more-from-store-section" id="more">
        <h2 className="section-title">More From the Store</h2>
        
        <div className="product-cards-container" ref={scrollRef}>
          {products.map((item) => (
            <div className="store-card" key={item.id}>
              <Link 
                to={`/product/${item.id}`} 
                style={{ textDecoration: 'none', color: 'inherit' }}
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={item.images[0]} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.category}</p>
                <span className="card-price">{item.newPrice}</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="slider-arrow" onClick={handleScrollRight}>
          &gt;
        </div>
      </div>

    </div>
  );
}

export default Product;