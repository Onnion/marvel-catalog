import React from 'react';
import Routes from './routes';
import { Body } from './styles';

export const App: React.FC = () => {
    return (
        <>
            <Body className="d-flex flex-column">
                < Routes />
            </Body>
        </>
    )
}
