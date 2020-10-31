import React from 'react'
import { withRouter, Route, Switch, Redirect } from "react-router-dom";

import Navigation from '../components/Navigation'
import Principal from './principal'
import Features from './features'
import Listing from './listing'
import Classify from './classify'

const App = (props) => {
    

    return (
        <>
            <Navigation />
            <Switch>
                <Route path="/home" render={props => <Principal {...props} />} />
                <Route path="/features" render={props => <Features {...props} />} />
                <Route path="/listing" render={props => <Listing {...props} />} />
                <Route path="/classify" render={props => <Classify {...props} />} />
                <Redirect to="/home" />
            </Switch>
        </>
    )
}

export default withRouter(App)