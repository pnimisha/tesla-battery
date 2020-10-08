import React from 'react';
import logoImage from '../../assets/logo.svg';
import './Header.css';
const Header = () => (
    <div className="header">
        <img src={logoImage} alt="tesla" />
    </div>
)

export default Header;