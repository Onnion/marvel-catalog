import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ComicsTypes } from '../../store/ducks/comics/types';
import ComicList from './../../components/ComicList';
import { State } from '../../store';
import Loader from '../../components/Loader';

export const Home: React.FC = () => {
    const { loading } = useSelector((state: State) => state.comics);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: ComicsTypes.LOAD });
    }, [dispatch]);

    return (
        <>
            {loading
                ? <Loader />
                : <ComicList />
            }
        </>
    )
}

export default Home;