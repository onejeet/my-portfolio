import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import Footer from './Footer';


const App = (props) => {
    return (      
        <div className={`app ${props.theme}`}>
            <Router>
                <Header />
                <Route path="/" exact component={Home}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route path="/projects" component={Projects}></Route>
                <Footer />
            </Router>
        </div>
    );
}

function mapStateToProps(state){
    return {
        theme: state.theme.value
    }
}

export default connect(mapStateToProps)(App);