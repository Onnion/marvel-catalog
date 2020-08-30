import React from 'react';
import Routes from './routes';
import { Body } from './styles';
import Header from './components/Header';

export const App: React.FC = () => {
    return (
        <>
            <Header />
            <Body className="d-flex">
                < Routes />
            </Body>
        </>
    )
}
