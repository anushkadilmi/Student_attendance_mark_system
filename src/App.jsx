import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import SignInForm from './page/SignInForm';
import SignUpForm from './page/SignUpForm'; 
import UpdateProfile from './page/UpdateProfile'; 
import Navbar from './component/Navbar';
import HomePage from './page/HomePage';
import RegistrationForm from './page/RegistrationForm';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} /> 
          <Route path="/register" element={<RegistrationForm />} /> 
          <Route path="/update-profile" element={<UpdateProfile />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
