import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CharactersTypes } from '../../store/ducks/characters/types';
import { Card, CardHeader, CardBody, Title } from './styles';
import { ThemeProvider } from 'styled-components';
import { State } from '../../store';

export interface CharacterProps {
    character: any;
}
export const Character: React.FC<CharacterProps> = (props: CharacterProps) => {
    const { character: characterState } = useSelector((state: State) => state.characters);
    const { character } = props;

    const dispatch = useDispatch();

    function set(e) {
        e.preventDefault();
        dispatch({ type: CharactersTypes.SET, payload: character });
    }

    function activeClass(): string {
        return characterState?.id === character.id ? 'active' : '';
    }

    return (
        <ThemeProvider theme={{ background: character.thumbnail }}>

            <Card className={activeClass()} onClick={e => set(e)}>
                <CardHeader></CardHeader>
                <CardBody id="body">
                    <Title>{character.name}</Title>
                </CardBody>

            </Card>
        </ThemeProvider>
    );
}

export default Character;