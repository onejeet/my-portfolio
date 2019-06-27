import React from 'react';

import ProfilePhoto from './ProfilePhoto';
import InfoBox from './InfoBox';
import IntroText from './IntroText';



const Home = () => {
    return (
        <div className="app">
            <div className="left-half">
                <IntroText />
            </div>
            <div className="right-half">
                <ProfilePhoto 
                width= '100px'
                />
                <InfoBox />
            </div>
        </div>
    );
}


export default Home;