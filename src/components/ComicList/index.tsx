import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../store';

export const ComicList: React.FC = () => {
    const { comics } = useSelector((state: State) => state.comics);

    return (
        <ul>
            {
                comics.map(comic => (
                    <li key={comic.id}>{comic.title}</li>
                ))
            }
        </ul>
    );
}

export default ComicList;