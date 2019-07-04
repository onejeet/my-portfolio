import React from 'react';

import ProfilePhoto from './ProfilePhoto';
import InfoBox from './InfoBox';
import IntroText from './IntroText';
import photo from '../assets/j.jpg';


const Home = (props) => {
    return (
        <div className="home">
            <div className="left-half">
                <IntroText />
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

export default Home;