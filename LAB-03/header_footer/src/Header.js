import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__left">
                <div className="header__logo">
                    <h2>Disney+ Hotstar</h2>
                </div>
                <nav className="header__nav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#tv">TV</a></li>
                        <li><a href="#movies">Movies</a></li>
                        <li><a href="#sports">Sports</a></li>
                        <li><a href="#disney">Disney+</a></li>
                        <li><a href="#kids">Kids</a></li>
                    </ul>
                </nav>
            </div>
            <div className="header__right">
                <div className="header__search">
                    <input type="text" placeholder="Search" className="search-input" />
                    <span className="header__icon">🔍</span>
                </div>
                <button className="header__subscribe">Subscribe</button>
                <div className="header__avatar">
                    <span className="header__icon user-icon">👤</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
