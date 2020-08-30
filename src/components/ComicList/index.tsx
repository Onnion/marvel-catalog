import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../store';
import { Comic } from '../Comic';
import { Grid } from './styles';

export const ComicList: React.FC = () => {
    const { comics } = useSelector((state: State) => state.comics);

    return (
        <div className="row p-3">
            <div className="col">
                <Grid>
                    {comics.map((comic, index) => (
                        <Comic key={index} comic={comic} />
                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default ComicList;