import React from 'react';
import InfoBox from './InfoBox';
import ProfilePhoto from './ProfilePhoto';
import photo from '../assets/j.jpg';

const Contact = () => {
    return (
        <div className="contactus">
            <div className="left-half">
                <div className="intro">
                    <p>
                    You can always drop a message, feedback or query on <a href="mailto:jitendra909@gmail.com">jitendra909@gmail.com</a>. However you can also drop a DM on social media.
                    </p>
                </div>
                
            </div>
            <div className="right-half">
                <ProfilePhoto 
                width= '140px'
                photo = {photo}
                />
                <InfoBox />
            </div>
        </div>
    );
}

export default Contact;