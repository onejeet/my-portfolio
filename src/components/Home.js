import React from 'react';

import ProfilePhoto from './ProfilePhoto';
import InfoBox from './InfoBox';
import IntroText from './IntroText';
import photo from '../assets/j.jpg';


const Home = () => {
    return (
        <div className="app">
            <div className="left-half">
                <IntroText />
            </div>
            <div className="right-half">
                <ProfilePhoto 
                width= '100px'
                photo = {photo}
                />
                <InfoBox />
            </div>
        </div>
    );
}


export default Home;