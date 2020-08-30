import React, { useState, useEffect } from 'react';
import { HeaderWrapper, Search } from './styles';
import Loader from '../Loader';
import { translate } from './../../services/translate';
import { useDispatch } from 'react-redux';
import { ComicsTypes } from '../../store/ducks/comics/types';

export const Header: React.FC = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const handleType = setInterval(async () => {
            const translated = await translate(search);

            dispatch({ type: ComicsTypes.SEARCH, payload: translated });
            clearInterval(handleType);
        }, 800);

        return () => clearInterval(handleType);
    }, [search]);

    return (
        <HeaderWrapper className="d-flex align-items-center justify-content-center">
            <div className="container">
                <div className="row" style={{ position: 'relative' }}>
                    {false && <Loader />}
                    <Search
                        onChange={(event) => setSearch(event.target.value)}
                        id="filled-search"
                        label="Search field"
                        type="search"
                        variant="filled" />
                </div>
            </div>
        </HeaderWrapper>
    );
}

export default Header;