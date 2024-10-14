import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Sidebar from './Sidebar';
import Header from './Header';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      
      console.log('Logged out');
      
      navigate('/');
    }
  };

  return (
    <div className="dashboard-container">
    <Sidebar />
    <div className="main-content">
      <Header title="User Dashboard" onLogout={handleLogout} />
      <div className="dashboard-content">
        <h2>Welcome to the Dashboard!</h2>
        <p>Here you can view your statistics, reports, and more.</p>
        <div className="metrics">
          
          
          <div className="metric-card">
           
            <img src="/images/images.jpeg" alt="Metric 1 Image" className="metric-image" />
          </div>
          
          
          <div className="metric-card">
            
            <img src="/images/image3.png" alt="Metric 2 Image" className="metric-image" />
          </div>
          
          
          <div className="metric-card">
           
            <img src="/images/image6.jpg" alt="Metric 3 Image" className="metric-image" />
          </div>
          
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Dashboard;
