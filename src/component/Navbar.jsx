import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <nav style={{ padding: '10px', backgroundColor: '#000080', textAlign: 'right' }}>
     <Link to="/HomePage" style={{ margin: '0 15px' , color: 'white'}}>Home</Link>
      <Link to="/signin" style={{ margin: '0 15px' , color: 'white'}}>Students</Link>
      <Link to="/tutors" style={{ margin: '0 15px' , color: 'white'}}>Tutors</Link>
    </nav>
  );
};

export default Navbar;
