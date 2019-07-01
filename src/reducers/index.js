import { combineReducers } from 'redux';
import bckImage from '../assets/pattern.png';

let bgImagePath = '../assets/back.jpg';

let initialState = {
    'value':'light'
}

function theme(state = initialState, action){
    if(action.type === 'UPDATE_THEME'){
        if(action.payload === 'dark'){
            document.body.style.backgroundColor = "#000000";
        }else{
            document.body.style.backgroundColor = "#ffffff";
        }
        return Object.assign({}, state, {'value':action.payload});
    }
    return state;
}

export default combineReducers({
    theme
});