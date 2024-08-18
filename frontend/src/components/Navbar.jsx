import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1>BlogApp</h1>
            </div>
            <div className="navbar-right">
                <a href="/">
                    <FontAwesomeIcon icon={faHome} />
                </a>
                <a href="/add">
                    <FontAwesomeIcon icon={faPlus} />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
