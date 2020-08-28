import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Loader from './components/FullScreen';

const Home = React.lazy(() => import('./pages/Home'));

export default function Routes() {
    return (
        <BrowserRouter>
            <React.Suspense fallback={<Loader />}>
                <Switch>
                    <Route path='/' component={Home} />
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    );
}
