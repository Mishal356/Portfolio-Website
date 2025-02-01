import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import ServicePage from './components/ServicePage';
import ContactPage from './components/ContactPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/blog" component={BlogPage} />
                <Route path="/services" component={ServicePage} />
                <Route path="/contact" component={ContactPage} />
            </Switch>
        </Router>
    );
};

export default App;
