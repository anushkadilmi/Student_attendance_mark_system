import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const Sidebar = () => {
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleProfileOptions = () => {
    setShowProfileOptions(!showProfileOptions);
  };

  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <br />
        <li onClick={toggleProfileOptions} style={{ cursor: 'pointer' }}>
          Profile {showProfileOptions ? '▼' : '▶'}
        </li>
        {showProfileOptions && (
          <ul className="profile-submenu">
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/update-profile">Update Profile</Link>
            </li>
          </ul>
        )}
        <br />
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <br />
        <li>
          <Link to="/reports">Reports</Link>
        </li>
        <br />
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
