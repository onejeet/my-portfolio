import React, { PureComponent } from 'react';
import photography_thumb from '../assets/photography_thumb.jpg';


class ThingsILove extends PureComponent {
    render(){
        return (
            <div className="main">
                <div className="things">
                        <h1>
                            Few things I love to do...
                        </h1>
                        <div className="list">
                            <div className="card">
                                <div className="cover">
                                    <img src={photography_thumb} alt="photography"/>
                                </div>
                                <div className="title">Photography</div>
                            </div>
                            <div className="card">
                                <div className="cover">
                                    <img src={photography_thumb} alt="photography"/>
                                </div>
                                <div className="title">Video Recording & Editing</div>
                            </div>
                            <div className="card">
                                <div className="cover">
                                    <img src={photography_thumb} alt="photography"/>
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