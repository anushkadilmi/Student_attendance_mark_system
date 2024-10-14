import React from 'react';
import '../styles/Dashboard.css';

const Header = ({ title, onLogout }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Header;