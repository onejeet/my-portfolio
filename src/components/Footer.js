import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePhoto from './ProfilePhoto';
import jsIcon from '../assets/js.png';

const Footer = () => {
    return (
        <div className="footer" >
            <div className="nav">
                <div className="branding">
                    <ProfilePhoto 
                    width = '36px'
                    photo={jsIcon}
                    />
                </div>
                <Link to="/" >Home</Link>
                <a href="https://www.dotscreated.com" rel="noopener noreferrer" target="_blank">Blog</a>
                <Link to="/projects">Projects</Link>
                <Link to="/thingsilove">Things I Love</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="copyright">
              
            </div>
        </div>
    );
}


export default Footer;