import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../store';
import { Comic } from '../Comic';
import { Grid } from './styles';

export const ComicList: React.FC = () => {
    const { comics } = useSelector((state: State) => state.comics);

    return (
        <>
            <Grid>
                {comics.map((comic, index) => (
                    <Comic key={index} comic={comic} />
                ))}
            </Grid>
        </>
    );
}

export default ComicList;