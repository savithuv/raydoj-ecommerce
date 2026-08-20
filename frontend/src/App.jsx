import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the Product Page */}
        <Route path="/product/:id" element={<Product />} />

        {/* Route for the Cart Page */}
        <Route path="/cart" element={<Cart />} />

        {/* Default fallback route (redirects root to cart or product for now) */}
        <Route path="/" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;