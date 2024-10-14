import React, { useState } from 'react';
import { auth } from '../firebase'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom'; 
import SignUpForm from './SignUpForm'; 

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showSignUp, setShowSignUp] = useState(false); 
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in successfully');
      navigate('/dashboard'); 
    } catch (error) {
      setError(error.message);
    }

    setEmail('');
    setPassword('');
  };

  const toggleSignUp = () => {
    setShowSignUp((prev) => !prev); 
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '50px', border: '1px solid #ccc', borderRadius: '8px', top: '50px' }}>
      <h2>{showSignUp ? 'Sign Up' : 'Sign In'}</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      
      {!showSignUp ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              style={{ width: '100%', padding: '8px', margin: '5px 0' }} 
            />
          </div>
          <div>
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              style={{ width: '100%', padding: '8px', margin: '5px 0' }} 
            />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}>
            Sign In
          </button>
        </form>
      ) : (
        <SignUpForm /> 
      )}

      <p>
        {showSignUp ? 'Already have an account?' : "Don’t have an account?"} 
        <button onClick={toggleSignUp} style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}>
          {showSignUp ? 'Sign In' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
};

export default SignInForm; 
