import React from 'react';
import { Title, Description, CancelCharacter } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store';
import { CharactersTypes } from '../../store/ducks/characters/types';

export interface HeaderBannerProps {
    init: boolean;
}

export const HeaderBanner: React.FC<HeaderBannerProps> = (props: HeaderBannerProps) => {
    const { character } = useSelector((state: State) => state.characters);
    const dispatch = useDispatch();

    function cancelCharacter() {
        dispatch({ type: CharactersTypes.SET, payload: null });
    }

    return (
        <>
            <CancelCharacter onClick={cancelCharacter} />

            <div className="row my-3">
                <div className="col">
                    <Title>{character.name}</Title>
                    <Description>{character.description}</Description>
                </div>
            </div>
        </>
    );
}

export default HeaderBanner;