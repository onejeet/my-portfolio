import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Contact from './Contact';

const App = () => {
    return (
        <Router>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/contact" component={Contact}></Route>
        </Router>
    );
}

export default App;