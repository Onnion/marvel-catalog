import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../store';
import { Comic } from '../Comic';

export const ComicList: React.FC = () => {
    const { comics } = useSelector((state: State) => state.comics);

    return (
        <ul>
            {comics.map((comic, index) => <Comic key={index} comic={comic} />)}
        </ul>
    );
}

export default ComicList;