import React from 'react';
import { Link } from 'react-router-dom';


const InfoBox = (props) => {
    return(
        <div className="info">
            <h1>Alex Martini</h1>
            <p>UI Developer</p>
            <div className="social">
                <a href="https://www.twitter.com/onejeet" className="icon"><i className="fa fa-twitter" aria-hidden="true"></i></a> 
                <a href="https://www.github.com/onejeet" className="icon"><i className="fa fa-github" aria-hidden="true"></i></a> 
                <a href="https://www.linkedin.com/in/onejeet" className="icon"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a> 
            </div>
        </div>
    );
}


export default InfoBox;