import React from 'react';
//import imagePlaceholder from '../assets/placeholder.png';
import photo from '../assets/j.jpg';

let imagePlaceholder = 'https://via.placeholder.com/300.png';


const ProfilePhoto = (props) => {
    let style = {
        'width': props.width,
        'height': props.width
    }
    return (
        <div className='profile-photo' style={style}>
          <img src={imagePlaceholder} alt=""/>
         </div>
    );
    
}


export default ProfilePhoto;