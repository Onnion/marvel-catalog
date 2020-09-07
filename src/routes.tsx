import React from 'react';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import Loader from './components/FullScreen';

const Home = React.lazy(() => import('./pages/Home'));
const Intern = React.lazy(() => import('./pages/Intern'));

export default function Routes() {

    return (
        <HashRouter >
            <React.Suspense fallback={<Loader />}>
                <Switch>
                    <Route path='/' exact={true} component={Home} />
                    <Route path='/detail' component={Intern} />
                    <Redirect from='*' to='/' />
                </Switch>
            </React.Suspense>
        </HashRouter>
    );
}
