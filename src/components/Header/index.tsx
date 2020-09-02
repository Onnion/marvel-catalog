import React, { useState, useEffect } from 'react';
import { HeaderWrapper, Search, Title, Description, CancelCharacter, Badge, RemoveSearch } from './styles';
import Loader from '../Loader';
import { translate } from './../../services/translate';
import { useDispatch, useSelector } from 'react-redux';
import { ComicsTypes } from '../../store/ducks/comics/types';
import { State } from '../../store';
import { ThemeProvider } from 'styled-components';
import { CharactersTypes } from '../../store/ducks/characters/types';

export const Header: React.FC = () => {
    const { character, loading_search, loading } = useSelector((state: State) => state.characters);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    function cancelCharacter() {
        dispatch({ type: CharactersTypes.SET, payload: null });
    }

    function cleanerSearch() {
        setSearch('');
    }

    useEffect(() => {
        const handleType = setInterval(async () => {
            try {
                // const translated = !!search && await translate(search);

                // if (!!search && translated) {
                dispatch({ type: CharactersTypes[search ? 'SEARCH' : 'LOAD'], payload: search });
                // }

            } catch (error) {

            }
            clearInterval(handleType);
        }, 500);

        return () => clearInterval(handleType);
    }, [search, dispatch]);

    return (
        <ThemeProvider theme={{ background: character?.thumbnail, defaultBg: !character }}>
            <HeaderWrapper className="d-flex align-items-center justify-content-center py-5">
                <div className="container">
                    {character
                        ? <>
                            <CancelCharacter onClick={cancelCharacter} />

                            <div className="row my-3">
                                <div className="col">
                                    <Title>{character.name}</Title>
                                    <Description>{character.description}</Description>
                                </div>
                            </div>
                        </>

                        : <>
                            <div className="row" style={{ position: 'relative' }}>

                                <div className="col">
                                    {(loading_search || loading) && <Loader />}
                                    {search && <Badge onClick={cleanerSearch}>{search}<RemoveSearch /></Badge>}

                                    <Search
                                        onChange={(event) => setSearch(event.target.value)}
                                        id="filled-search"
                                        value={search}
                                        placeholder='Ex: Homem de Ferro'
                                        label='Pesquise seu personagem favorito'
                                        type="search"
                                        variant="filled" />
                                </div>

                            </div>
                        </>
                    }
                </div>
            </HeaderWrapper>
        </ThemeProvider>
    );
}

export default Header;