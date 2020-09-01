import React, { useEffect } from 'react';
import Routes from './routes';
import { Body } from './styles';
import { ComicsTypes } from './store/ducks/comics/types';
import { CharactersTypes } from './store/ducks/characters/types';
import { useDispatch } from 'react-redux';

export const App: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: ComicsTypes.LOAD });
        dispatch({ type: CharactersTypes.LOAD });
    });

    return (
        <>
            <Body className="d-flex flex-column">
                < Routes />
            </Body>
        </>
    )
}
