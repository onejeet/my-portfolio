import React from 'react';
import loader from '../assets/loader.gif';

const ProfilePhoto = (props) => {
    let style = {
        'width': props.width,
        'height': props.width
    }
    return (
            props.photo ?
            <div className='profile-photo' style={style}>
                <img src={props.photo} alt=""/>
            </div>
            :
            <div className="loader">
                <img src={loader} alt="loader"/>
            </div>
    );
    
}


export default ProfilePhoto;