import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
    <div>
        <nav>
            <div className="nav-logo-container">
                <img src='./logoo.png' alt="WorkLoom" /><span>WorkLoom</span>
            </div>
            <div className="navbar-links-container">
                <a href="">Features</a>
                <a href="">Workflow</a>
                <a href="">Testimonials</a>
                <a href="">Pricing</a>
                <a href="./Components/login">
                <button className="primary-button">Login</button></a>
            </div>
        </nav>
    </div>
    );
}
export default Navbar;