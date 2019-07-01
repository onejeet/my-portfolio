import { combineReducers } from 'redux';

let bgImagePath = '../assets/back.jpg';

let initialState = {
    'value':'light'
}

function theme(state = initialState, action){
    if(action.type === 'UPDATE_THEME'){
        if(action.payload === 'dark'){
            document.body.style.background = "black";
        }else{
            document.body.style.background = "url('"+bgImagePath+"') no-repeat";
        }
        return Object.assign({}, state, {'value':action.payload});
    }
    return state;
}

export default combineReducers({
    theme
});