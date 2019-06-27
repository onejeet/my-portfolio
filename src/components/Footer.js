import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer" >
            <div className="nav">
                <Link to="/" >Home</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="copyright">
                &copy;  Jitendra Sharma
            </div>
        </div>
    );
}


export default Footer;