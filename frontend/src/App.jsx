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
import ManageOrders from './components/admin/ManageOrders'; // Imported perfectly!

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

        {/* PAGE 2: THE MAIN ADMIN DASHBOARD */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* PAGE 3: MANAGE PRODUCTS PAGE */}
        <Route path="/admin/products" element={<ManageProducts />} />

        {/* PAGE 4: MANAGE ORDERS PAGE (THIS IS WHAT WAS MISSING!) */}
        <Route path="/admin/orders" element={<ManageOrders />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;