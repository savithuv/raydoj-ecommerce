import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Footer from './components/Footer'; // Import the Footer

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductGrid />
      <About />
      <Footer /> {/* The final piece! */}
    </div>
  );
}

export default App;