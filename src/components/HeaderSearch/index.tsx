import React, { useState, useEffect } from 'react';
import { Search, Badge, RemoveSearch } from './styles';
import Loader from '../Loader';
import { useDispatch, useSelector } from 'react-redux';
import { CharactersTypes } from '../../store/ducks/characters/types';
import { State } from '../../store';

export interface HeaderBannerProps {
    init: boolean;
}

export const HeaderSearch: React.FC<HeaderBannerProps> = (props: HeaderBannerProps) => {
    const { loading_search, loading } = useSelector((state: State) => state.characters);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    function cleanerSearch() {
        setSearch('');
    }

    useEffect(() => {
        const handleType = setInterval(() => {
            dispatch({ type: CharactersTypes[search ? 'SEARCH' : 'LOAD'], payload: search });
            clearInterval(handleType);
        }, 500);

        return () => clearInterval(handleType);
    }, [search]);

    return (
        <>
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
    );
}

export default HeaderSearch;