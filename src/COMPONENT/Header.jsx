import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './img/Logo-removebg-preview.png';
import './Header.module.css';

const debounce = (func, delay) => {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
};

const Header = () => {
  const [activeNav, setActiveNav] = useState('/home');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // To navigate to the search results page

  // Function to set active navigation link
  const handleNavClick = useCallback(
    debounce((navPath) => {
      setActiveNav(navPath);
    }, 300),
    []
  );

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle form submission for search
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery.trim()}`); // Redirect to search results page with query
    }
  };

  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/" onClick={() => handleNavClick('/')}>
          <img src={logo} alt="Logo" style={{ height: 'auto', width: '7em' }} />
        </Link>

        {/* Toggle button for offcanvas */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas Menu */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Navigation</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {/* Navigation Links */}
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeNav === '/home' ? 'active' : ''}`}
                  to="/home"
                  onClick={() => handleNavClick('/home')}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeNav === '/DesignStyleViewer' ? 'active' : ''}`}
                  to="/DesignStyleViewer"
                  onClick={() => handleNavClick('/DesignStyleViewer')}
                >
                  Design Styles
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeNav === '/gallery' ? 'active' : ''}`}
                  to="/gallery"
                  onClick={() => handleNavClick('/gallery')}
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeNav === '/product' ? 'active' : ''}`}
                  to="/product"
                  onClick={() => handleNavClick('/product')}
                >
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeNav === '/about' ? 'active' : ''}`}
                  to="/about"
                  onClick={() => handleNavClick('/about')}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeNav === '/contact' ? 'active' : ''}`}
                  to="/contact"
                  onClick={() => handleNavClick('/contact')}
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeNav === '/Feedback' ? 'active' : ''}`}
                  to="/Feedback"
                  onClick={() => handleNavClick('/Feedback')}
                >
                  Feedback
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeNav === '/SiteMap' ? 'active' : ''}`}
                  to="/SiteMap"
                  onClick={() => handleNavClick('/SiteMap')}>
                  Site Map
                </Link>
              </li>
            </ul>

            {/* Search Form */}
            <form className="d-flex mt-3" role="search" onSubmit={handleSearchSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
