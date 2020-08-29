import React from 'react';
import Routes from './routes';
import { Body, Header, HeaderWrapper } from './styles';

export const App: React.FC = () => {
    return (
        <>
            <HeaderWrapper className="d-flex align-items-center justify-content-center">
                <Header className="container">a</Header>
            </HeaderWrapper>
            <Body className="d-flex">
                < Routes />
            </Body>
        </>
    )
}
