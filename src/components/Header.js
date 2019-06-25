import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div class="header">
            <Link to="/" >Home</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}


export default Header;