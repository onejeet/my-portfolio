import React, { PureComponent } from 'react';
import photography_thumb from '../assets/photography_thumb.jpg';
import video_thumb from '../assets/video_thumb.jpg';
import trek_thumb from '../assets/trek_thumb.jpg';

const urls = {
    photographer: 'https://www.flickr.com/photos/onejeet/',
    youtube: 'https://www.youtube.com/dilbhukkad'
}

function cardClickHandler(url){
    
}

class ThingsILove extends PureComponent {
    render(){
        return (
            <div className="main">
                <div className="things">
                        <h1>
                            Few things I love to do...
                        </h1>
                        <div className="list">
                            <div className="card" onClick={cardClickHandler(urls.photographer)}>
                                <div className="cover">
                                    <img src={photography_thumb} alt="photography"/>
                                </div>
                                <div className="title" title="Checkout Photos"><a href={urls.photographer} target="_blank" rel="noreferrer noopener">Photography</a></div>
                            </div>
                            <div className="card">
                                <div className="cover">
                                    <img src={video_thumb} alt="photography"/>
                                </div>
                                <div className="title" title="Checkout Videos"><a href={urls.youtube} target="_blank" rel="noreferrer noopener">Video Recording & Editing</a></div>
                            </div>
                            <div className="card">
                                <div className="cover">
                                    <img src={trek_thumb} alt="photography"/>
                                </div>
                                <div className="title">Mountain Trekkings</div>
                            </div>
                        </div>
                </div>
                <div className="container">
    
                </div>
            </div>
        );
    }
}


export default ThingsILove;