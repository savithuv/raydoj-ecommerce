import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Footer from './components/Footer';

// Pages
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginModal from './pages/LoginModal'; 
import SignUpModal from './pages/SignUpModal'; // <-- 1. Import the new Sign Up file!

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // 2. These are the switches for BOTH popups
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  // 3. This function closes Sign Up and opens Login
  const openLogin = () => {
    setIsSignUpModalOpen(false);
    setIsLoginModalOpen(true);
  };

  // 4. This function closes Login and opens Sign Up
  const openSignUp = () => {
    setIsLoginModalOpen(false);
    setIsSignUpModalOpen(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Navbar 
              isLoggedIn={isLoggedIn} 
              openLoginModal={() => setIsLoginModalOpen(true)} 
            />
            <Hero />
            <ProductGrid />
            <About />
            <Footer />
          </div>
        } />

        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* 5. Drop both modals here at the bottom and pass them the functions */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={() => {
          setIsLoggedIn(true); 
          setIsLoginModalOpen(false); 
        }}
        onSwitchToSignUp={openSignUp} /* Passes the swap function to Login */
      />

      <SignUpModal 
        isOpen={isSignUpModalOpen} 
        onClose={() => setIsSignUpModalOpen(false)}
        onSignUpSuccess={() => {
          setIsLoggedIn(true); 
          setIsSignUpModalOpen(false); 
        }}
        onSwitchToLogin={openLogin} /* Passes the swap function to Sign Up */
      />
    </Router>
  );
}

export default App;