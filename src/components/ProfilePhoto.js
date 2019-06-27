import React from 'react';
//import imagePlaceholder from '../assets/placeholder.png';

let imagePlaceholder = 'https://via.placeholder.com/300.png';


const ProfilePhoto = (props) => {
    let style = {
        'width': props.width,
        'height': props.width
    }
    return (
        <div className='profile-photo' style={style}>
          <img src={props.photo? props.photo : imagePlaceholder} alt=""/>
         </div>
    );
    
}


export default ProfilePhoto;