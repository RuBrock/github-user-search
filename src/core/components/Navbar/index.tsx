import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav className="main-nav-container">
        <Link to="/" className="main-nav-title">
            <span>Bootcamp DevSuperior</span>
        </Link>
    </nav>
);

export default Navbar;