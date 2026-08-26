import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. ADDED THIS: The navigation tool!
import './AdminDashboard.css';

// Importing your logo and custom icons
import logo from '../../assets/logo.png'; 
import productsIcon from '../../assets/products.png'; 
import ordersIcon from '../../assets/orders.png';
import reportIcon from '../../assets/report.png';

const AdminDashboard = () => {
  const navigate = useNavigate(); // 2. ADDED THIS: Turns on the remote control!

  return (
    <div className="admin-container">
      {/* 1. HEADER */}
      <div className="admin-header">
        <img src={logo} alt="Raydoj Logo" className="admin-logo" />
        <h1 className="admin-title">RAYDOJ ADMIN DASHBOARD</h1>
      </div>

      <hr className="admin-divider" />

      {/* 2. STATS ROW */}
      <div className="stats-container">
        <div className="stat-card">
          <h4>PRODUCTS</h4>
          <h2>6</h2>
          <p>Total products</p>
        </div>
        <div className="stat-card">
          <h4>ORDERS</h4>
          <h2>14</h2>
          <p>Total orders</p>
        </div>
        <div className="stat-card">
          <h4>REVENUE</h4>
          <h2>LKR 122,000</h2>
          <p>Total revenue</p>
        </div>
        <div className="stat-card">
          <h4>USERS</h4>
          <h2>12</h2>
          <p>Total users</p>
        </div>
      </div>

      {/* 3. NAVIGATION BUTTONS */}
      <div className="admin-nav-buttons">
        
        {/* Manage Products Button */}
        <button className="admin-btn" onClick={() => navigate('/admin/products')}>
          <span>Manage Products</span>
          <img src={productsIcon} alt="Products" className="admin-btn-icon" />
        </button>
        
        {/* UPDATED: Manage Orders Button */}
        <button className="admin-btn" onClick={() => navigate('/admin/orders')}>
          <span>Manage Orders</span>
          <img src={ordersIcon} alt="Orders" className="admin-btn-icon" />
        </button>
        
        {/* Reports Button (You can do the same for this one later!) */}
        <button className="admin-btn">
          <span>Reports</span>
          <img src={reportIcon} alt="Reports" className="admin-btn-icon" />
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;