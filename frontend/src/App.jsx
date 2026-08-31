import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Pages & Modals
import LoginModal from './pages/LoginModal';
import SignUpModal from './pages/SignUpModal';
import Cart from './pages/Cart'; 
import Product from './pages/Product';
import Checkout from './pages/Checkout'; // 🔥 1. Import Checkout Page

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
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  
  // Automatically checks if token exists on page load!
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token')); 

  // Global Cart State
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // 🔥 2. Clear Cart helper function after checkout
  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const openSignUpModal = () => {
    setIsLoginModalOpen(false);
    setIsSignUpModalOpen(true);
  };
  const closeModals = () => {
    setIsLoginModalOpen(false);
    setIsSignUpModalOpen(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    closeModals();
  };

  // Handle Logout Logic
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    alert('Logged out successfully!');
  };

  return (
    <BrowserRouter>
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={closeModals} 
        onSwitchToSignUp={openSignUpModal} 
        onLoginSuccess={handleLoginSuccess} 
      />
      
      <SignUpModal 
        isOpen={isSignUpModalOpen} 
        onClose={closeModals} 
        onSwitchToLogin={openLoginModal} 
        onSignUpSuccess={handleLoginSuccess} 
      />

      <Routes>
        <Route path="/" element={
          <div>
            <Navbar isLoggedIn={isLoggedIn} openLoginModal={openLoginModal} cartCount={cartCount} onLogout={handleLogout} />
            <Hero />
            <ProductGrid />
            <About />
            <Footer />
          </div>
        } />

        <Route path="/cart" element={
          <div>
            <Navbar isLoggedIn={isLoggedIn} openLoginModal={openLoginModal} cartCount={cartCount} onLogout={handleLogout} />
            <Cart cartItems={cartItems} setCartItems={setCartItems} /> 
            <Footer />
          </div>
        } />

        <Route path="/product/:id" element={
          <div>
            <Navbar isLoggedIn={isLoggedIn} openLoginModal={openLoginModal} cartCount={cartCount} onLogout={handleLogout} />
            <Product isLoggedIn={isLoggedIn} openLoginModal={openLoginModal} addToCart={handleAddToCart} /> 
            <Footer />
          </div>
        } />

       <Route path="/checkout" element={
          <div>
            <Navbar 
              isLoggedIn={isLoggedIn} 
              openLoginModal={openLoginModal} 
              cartCount={cartCount} 
              onLogout={handleLogout} 
            />
            
            <Checkout 
              cartItems={cartItems} 
              setCartItems={setCartItems} 
              clearCart={clearCart} 
            />
            
            <Footer />
          </div>
        } />

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<ManageProducts />} />
        <Route path="/admin/orders" element={<ManageOrders />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;