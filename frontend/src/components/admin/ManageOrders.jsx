import React, { useState } from 'react';
import './ManageOrders.css';

// Reusing your awesome icons!
import logo from '../../assets/logo.png';
import settingsIcon from '../../assets/settings.png';
import imageIcon from '../../assets/image.png';

const ManageOrders = () => {
  // 1. State for the cool Tab Transition
  const [activeTab, setActiveTab] = useState('ongoing');

  // 2. State to hold our orders so we can move them around
  const [orders, setOrders] = useState([
    {
      id: "001",
      productName: "COW Leather Shii",
      price: "24000",
      sku: "001",
      customerName: "Savithu virran perera",
      address: "14/2 grace perice rd panadura",
      city: "Panadura",
      phone1: "0724907010",
      phone2: "0760335049",
      status: "Processing", // Default status
      isDone: false // Tells us which tab it belongs in!
    }
  ]);

  // 3. Function to move an order to the "Done" tab
  const handleMarkAsDone = (orderId) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, isDone: true } : order
    ));
    alert("Order successfully moved to Done Orders!");
  };

  // 4. Function to update Processing/Packed/etc. (For now, just a visual update)
  const handleStatusChange = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  // Filter the orders based on which tab we are looking at
  const displayedOrders = activeTab === 'ongoing' 
    ? orders.filter(order => !order.isDone) 
    : orders.filter(order => order.isDone);

  return (
    <div className="orders-container">
      {/* HEADER */}
      <div className="orders-header">
        <img src={logo} alt="Raydoj Logo" className="orders-logo" />
        <h1 className="orders-title">
          MANAGE ORDERS 
          <img src={settingsIcon} alt="Settings" className="settings-icon" />
        </h1>
      </div>
      <hr className="orders-divider" />

      {/* COOL TAB BUTTONS */}
      <div className="tabs-container">
        <button 
          className={`tab-btn ${activeTab === 'ongoing' ? 'active' : ''}`}
          onClick={() => setActiveTab('ongoing')}
        >
          ONGOING ORDERS
        </button>
        <button 
          className={`tab-btn ${activeTab === 'done' ? 'active' : ''}`}
          onClick={() => setActiveTab('done')}
        >
          DONE ORDERS
        </button>
      </div>

      {/* ORDERS LIST (With a fade-in transition class!) */}
      <div className="orders-list fade-in" key={activeTab}>
        {displayedOrders.length === 0 ? (
          <p className="empty-message">No orders in this section right now!</p>
        ) : (
          displayedOrders.map((order) => (
            <div className="order-card" key={order.id}>
              
              {/* Left Column: Product Info */}
              <div className="order-product-info">
                <div className="order-img-box">
                  <img src={imageIcon} alt="Product" className="order-placeholder-img" />
                </div>
                <div className="order-text-sm">
                  <strong>{order.productName} - LKR {order.price}</strong>
                  <p>SKU : {order.sku}</p>
                  <p>Order ID : {order.id}</p>
                </div>
              </div>

              {/* Middle Column: Customer Details */}
              <div className="order-customer-info">
                <div className="info-row"><span className="info-label">NAME</span><span>: {order.customerName}</span></div>
                <div className="info-row"><span className="info-label">ADDRESS</span><span>: {order.address}</span></div>
                <div className="info-row"><span className="info-label">CITY</span><span>: {order.city}</span></div>
                <div className="info-row"><span className="info-label">PHONE NUM 1</span><span>: {order.phone1}</span></div>
                <div className="info-row"><span className="info-label">PHONE NUM 2</span><span>: {order.phone2}</span></div>
                
                {/* Done Order Box (Only visible in Ongoing tab) */}
                {!order.isDone && (
                  <div className="status-box done-box">
                    <h5>ORDER</h5>
                    <div className="radio-group">
                      <label>Done</label>
                      <input type="radio" name={`done-${order.id}`} />
                    </div>
                    <button className="save-btn" onClick={() => handleMarkAsDone(order.id)}>SAVE</button>
                  </div>
                )}
              </div>

              {/* Right Column: Status Tracking */}
              {!order.isDone && (
                <div className="status-box tracking-box">
                  <h5>ORDER</h5>
                  {['Processing', 'Packed', 'Shipped', 'Delivered'].map((statusOption) => (
                    <div className="radio-group" key={statusOption}>
                      <label>{statusOption}</label>
                      <input 
                        type="radio" 
                        name={`status-${order.id}`} 
                        checked={order.status === statusOption}
                        onChange={() => handleStatusChange(order.id, statusOption)}
                      />
                    </div>
                  ))}
                  <button className="save-btn" onClick={() => alert("Customer tracking status updated!")}>SAVE</button>
                </div>
              )}
              
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ManageOrders;