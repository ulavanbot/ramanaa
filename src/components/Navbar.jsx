import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingBag, FiMenu, FiX, FiUser, FiLogOut } from 'react-icons/fi';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, isAdmin, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          Ramanaa<span>.</span>
        </Link>
        
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/shop" className="nav-link" onClick={() => setIsOpen(false)}>Shop</Link>
          {isAdmin && (
            <Link to="/admin" className="nav-link" onClick={() => setIsOpen(false)} style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Admin Dashboard</Link>
          )}
        </div>

        <div className="navbar-actions">
          {currentUser ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }} className="hide-on-mobile">
                Hi, {currentUser.email.split('@')[0]}
              </span>
              <button className="icon-btn" onClick={handleLogout} aria-label="Log Out" title="Log Out">
                <FiLogOut size={20} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="icon-btn" aria-label="Sign In" title="Sign In">
              <FiUser size={22} />
            </Link>
          )}
          
          <button className="icon-btn cart-btn" aria-label="Shopping Cart">
            <FiShoppingBag size={22} />
            <span className="cart-badge">2</span>
          </button>
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
