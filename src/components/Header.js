import React from 'react';
import { Link } from 'react-router-dom';
import bckVideo from '../assets/back.mp4';


const Header = () => {
    return (
        <div className="header">

            <Link to="/" >Home</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}


export default Header;