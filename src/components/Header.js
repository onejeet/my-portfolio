import React from 'react';
import { connect } from 'react-redux';
import { updateTheme } from '../actions';


const Header = (props) => {
    let currentTheme = props.theme;
    return (
        <div className="header">
            <div className="theme-selector">
                {currentTheme !== 'light' ? <div className="light" title="Turn Off Dark Theme" onClick={(e) => props.updateTheme(e.target.className)}></div>
                :<div className="dark" title="Turn On Dark Theme" onClick={(e) => props.updateTheme(e.target.className)}></div>} 
            </div>      
        </div>
    );
}

function mapStateToProps(state){
    return {
        theme: state.currentTheme.theme
    }
}

function mapDispatchToProps(dispatch){
    return {
        updateTheme: (theme) => dispatch(updateTheme(theme)) 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);