import React, { useState, useEffect } from 'react';
import { HeaderWrapper } from './styles';
import { useSelector } from 'react-redux';
import { State } from '../../store';
import { ThemeProvider } from 'styled-components';
import HeaderSearch from '../HeaderSearch';
import HeaderBanner from '../HeaderBanner';

export const Header: React.FC = () => {
    const { character } = useSelector((state: State) => state.characters);
    const [init, setInit] = useState(false);

    useEffect(() => {
        setInit(!init);
    }, []);

    return (
        <ThemeProvider theme={{ background: character?.thumbnail, defaultBg: !character }}>
            <HeaderWrapper className="d-flex align-items-center justify-content-center py-5">
                <div className="container">
                    {character ? <HeaderBanner init={init} /> : <HeaderSearch init={init} />}
                </div>
            </HeaderWrapper>
        </ThemeProvider>
    );
}

export default Header;