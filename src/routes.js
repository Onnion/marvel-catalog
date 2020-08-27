import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react'
import { Home } from './pages/Home/Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}
