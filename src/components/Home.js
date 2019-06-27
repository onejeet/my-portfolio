import React from 'react';

import ProfilePhoto from './ProfilePhoto';
import InfoBox from './InfoBox';
import IntroText from './IntroText';



const Home = () => {
    return (
        <div className="app">
            <div className="right-half">
                <ProfilePhoto 
                width= '150px'
                />
                <InfoBox />
            </div>
            <div className="left-half">
                <IntroText />
            </div>
            
        </div>
    );
}


export default Home;