import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../store';
import { Comic } from '../Comic';
import { Grid } from './styles';
import { ComicsTypes } from '../../store/ducks/comics/types';
import Loader from '../Loader';

export const ComicList: React.FC = () => {
    const [init, setInit] = useState(false);
    const { comics, loading } = useSelector((state: State) => state.comics);
    const { character } = useSelector((state: State) => state.characters);
    const dispatch = useDispatch();

    useEffect(() => {
        setInit(!init);
        dispatch({ type: ComicsTypes.LOAD });
    }, []);

    useEffect(() => {
        let option: any = { type: ComicsTypes[character ? 'LOAD_SEARCH_BY_CHARACTER' : 'LOAD'] };

        if (character) {
            option = { ...option, payload: character.id };
        }
        if (init) {
            dispatch(option);
        }
    }, [character]);

    return (
        <div className="row p-3" style={{ position: 'relative' }}>
            <div className="col" >
                {loading && <Loader />}
                <Grid>
                    {comics.map((comic, index) => (
                        <Comic key={index} comic={comic} />
                    ))}
                </Grid>
                {
                    (init && (!loading) && (comics.length <= 0)) && <h1 style={{ textAlign: 'center' }}>NENHUM QUADRINHO ENCONTRADO</h1>
                }

            </div>
        </div>
    );
}

export default ComicList;