import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


// import Landing from './pages/Landing'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;