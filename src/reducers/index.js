import { combineReducers } from 'redux';
import bckImage from '../assets/pattern.png';

let initialState = {
    'value':'light'
}

function theme(state = initialState, action){
    if(action.type === 'UPDATE_THEME'){
        if(action.payload === 'dark'){
            document.body.style.background = "#000000";
        }else{
            document.body.style.background = "url('"+bckImage+"') repeat";
        }
        return Object.assign({}, state, {'value':action.payload});
    }
    return state;
}

export default combineReducers({
    theme
});