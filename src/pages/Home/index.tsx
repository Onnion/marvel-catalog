import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ComicsTypes } from '../../store/ducks/comics/types';
import ComicList from './../../components/ComicList';
import { State } from '../../store';
import Loader from '../../components/Loader';
import MorePagination from '../../components/MorePagination';

export const Home: React.FC = () => {
    const { loading } = useSelector((state: State) => state.comics);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: ComicsTypes.LOAD });
    }, [dispatch]);

    function renderList(): JSX.Element {
        return (
            <div className="container-fluid py-3">
                <ComicList />

                <div className="row">
                    <div className="col">
                        <MorePagination />
                    </div>
                </div>

            </div>
        )
    }

    return (
        <>
            {loading
                ? <Loader />
                : renderList()
            }
        </>
    )
}

export default Home;