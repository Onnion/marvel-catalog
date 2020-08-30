import React, { useState, useEffect } from 'react';
import { HeaderWrapper, Search, Title, Description, CancelCharacter } from './styles';
import Loader from '../Loader';
import { translate } from './../../services/translate';
import { useDispatch, useSelector } from 'react-redux';
import { ComicsTypes } from '../../store/ducks/comics/types';
import { State } from '../../store';
import { ThemeProvider } from 'styled-components';
import { CharactersTypes } from '../../store/ducks/characters/types';

export const Header: React.FC = () => {
    const { character } = useSelector((state: State) => state.characters);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    function cancelCharacter() {
        dispatch({ type: CharactersTypes.SET, payload: null });
    }

    useEffect(() => {
        const handleType = setInterval(async () => {
            const translated = await translate(search);

            if (!!search) {
                dispatch({ type: ComicsTypes.SEARCH, payload: translated });
            }
            clearInterval(handleType);
        }, 800);

        return () => clearInterval(handleType);
    }, [search, dispatch]);

    return (

        <ThemeProvider theme={{ background: character?.thumbnail, defaultBg: !character }}>
            <HeaderWrapper className="d-flex align-items-center justify-content-center py-5">
                <div className="container">
                    {character && <>
                        <CancelCharacter onClick={cancelCharacter} />

                        <div className="row my-3">
                            <div className="col">
                                <Title>{character.name}</Title>
                                <Description>{character.description}</Description>
                            </div>
                        </div>
                    </>}

                    <div className="row" style={{ position: 'relative' }}>
                        {false && <Loader />}

                        <div className="col">
                            <Search
                                onChange={(event) => setSearch(event.target.value)}
                                id="filled-search"
                                placeholder={character ? 'Ex: Guerra Civil' : 'Ex: Homem de Ferro'}
                                label={character ? `Pesquise pelo seu quadrinho favorito do ${character.name}` : 'Pesquise por seu personagem favorito'}
                                type="search"
                                variant="filled" />
                        </div>

                    </div>
                </div>
            </HeaderWrapper>
        </ThemeProvider>
    );
}

export default Header;