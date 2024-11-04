import React, { useState } from 'react';
import { FaUser, FaSearch } from 'react-icons/fa';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            {/* <div className="navbar-brand">
                <h1>ShopLogo</h1>
            </div> */}

            {/* Search Bar */}
            <div className="navbar-search">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search products..."
                />
                <button className="search-btn">
                    <FaSearch />
                </button>
            </div>

            {/* Navbar Links */}
            <ul className={isMobileMenuOpen ? 'navbar-links active' : 'navbar-links'}>
                <li><a href="#home">Home</a></li>
                <li><a href="#shop">Shop</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#cart" className="cart-link">Cart (0)</a></li>
                <li><a href="#account" className="account-link"><FaUser /> Account</a></li>
            </ul>

            {/* Mobile Menu Icon */}
            <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
                <span className={isMobileMenuOpen ? 'menu-icon close' : 'menu-icon'}>&#9776;</span>
            </button>
        </nav>
    );
};


export default Navbar;
