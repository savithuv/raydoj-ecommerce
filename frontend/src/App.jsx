import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Home Page Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Footer from './components/Footer';

// Import Admin Components
import AdminDashboard from './components/admin/AdminDashboard';
import ManageProducts from './components/admin/ManageProducts'; 
import ManageOrders from './components/admin/ManageOrders'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* PAGE 1: THE HOME PAGE */}
        <Route path="/" element={
          <div>
            <Navbar />
            <Hero />
            <ProductGrid />
            <About />
            <Footer />
          </div>
        } />

        {/* PAGE 2: THE CART PAGE (New!) */}
        <Route path="/cart" element={
          <div>
            <Navbar />
            {/* We will replace this H1 with your actual Cart component next! */}
            <h1 style={{ textAlign: 'center', margin: '150px 0' }}>Your Cart Page is Ready to Build!</h1>
            <Footer />
          </div>
        } />

        {/* PAGE 3: THE PRODUCT DETAILS PAGE (New!) */}
        <Route path="/product/:id" element={
          <div>
            <Navbar />
            {/* We will replace this H1 with your product.html/jsx design! */}
            <h1 style={{ textAlign: 'center', margin: '150px 0' }}>Product Details Loading...</h1>
            <Footer />
          </div>
        } />

        {/* PAGE 4: THE MAIN ADMIN DASHBOARD */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* PAGE 5: MANAGE PRODUCTS PAGE */}
        <Route path="/admin/products" element={<ManageProducts />} />

        {/* PAGE 6: MANAGE ORDERS PAGE */}
        <Route path="/admin/orders" element={<ManageOrders />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;