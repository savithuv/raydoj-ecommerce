import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your friend's Home components from the components folder
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Footer from './components/Footer';

// Import your pages from the pages folder
import Product from './pages/Product';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Routes>
        {/* 1. Home Page (combining your friend's components) */}
        <Route path="/" element={
          <div>
            <Navbar />
            <Hero />
            <ProductGrid />
            <About />
            <Footer />
          </div>
        } />

        {/* 2. Product Detail Page */}
        <Route path="/product/:id" element={<Product />} />

        {/* 3. Cart Page */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;