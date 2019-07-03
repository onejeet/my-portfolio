import { combineReducers } from 'redux';
import bckImage from '../assets/pattern.png';

let initialState = {
    'theme':'light',
    'repos':[]
}

function currentTheme(state = initialState, action){
    if(action.type === 'UPDATE_THEME'){
        if(action.payload === 'dark'){
            document.body.style.background = "#000000";
        }else{
            document.body.style.background = "url('"+bckImage+"') repeat";
        }
        return Object.assign({}, state, {'theme':action.payload});
    }
    return state;
}

function currentRepos(state=initialState, action){
    if(action.type=== 'UPDATE_REPOS'){
        return Object.assign({}, state, {'repos':action.payload});
    }
    return state;
}
    
export default combineReducers({
    currentTheme,
    currentRepos
});