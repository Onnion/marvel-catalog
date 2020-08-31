import React from 'react';
import ComicList from './../../components/ComicList';
import MorePagination from '../../components/MorePagination';
import CharactersList from '../../components/CharactersList';
import Header from '../../components/Header';

export const Home: React.FC = () => {
    return (
        <>
            <Header />

            <div className="container-fluid py-3">
                <CharactersList />
            </div>

            <div className="container-fluid py-3">
                <ComicList />

                <div className="row">
                    <div className="col">
                        <MorePagination />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;