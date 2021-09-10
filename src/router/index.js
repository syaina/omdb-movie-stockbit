import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../components/Header'
import Home from '../pages/Home';
import MovieDetail from '../pages/MovieDetail';

function routes() {
    return(
        <Router>
            <Header/>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/:id" component={MovieDetail} />
        </Router>
    );
}
export default routes;