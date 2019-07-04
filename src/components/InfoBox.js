import React from 'react';

const InfoBox = (props) => {
    return(
        <div className="info">
            <h1 className="name">Jitendra Sharma</h1>
            <p className="role">UI Developer</p>
            <div className="social">
                <a href="https://www.twitter.com/onejeet" aria-label="Twitter" target="_blank"  rel="noopener noreferrer" className="icon"><i className="fa fa-twitter" aria-hidden="true"></i></a> 
                <a href="https://www.github.com/onejeet" aria-label="Github" target="_blank"  rel="noopener noreferrer" className="icon"><i className="fa fa-github" aria-hidden="true"></i></a> 
                <a href="https://www.linkedin.com/in/onejeet" aria-label="Linkedin" target="_blank"  rel="noopener noreferrer" className="icon"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a> 
            </div>
        </div>
    );
}


export default InfoBox;