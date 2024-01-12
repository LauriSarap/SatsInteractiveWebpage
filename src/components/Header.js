import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>SI</h1>
            </div>
            <nav className="navigation">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/games">Games</a>
                <a href="/contact">Contact</a>
            </nav>
            <div className="social-media">
                <a href="http://twitter.com">Twitter</a>
            </div>
        </header>
    );
};

export default Header;
