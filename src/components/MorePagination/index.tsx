import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FabMorePagination, Spin, Plus } from './styles';
import { ComicsTypes } from '../../store/ducks/comics/types';
import { State } from '../../store';

export const MorePagination: React.FC = () => {
    const { loading_more, offset } = useSelector((state: State) => state.comics);

    const dispatch = useDispatch();

    function getMoreComics() {
        dispatch({ type: ComicsTypes.LOAD_MORE, payload: offset });
    }

    return (
        <>
            <FabMorePagination onClick={getMoreComics}>
                {loading_more ? <Spin /> : <Plus />}
            </FabMorePagination>
        </>
    );
}

export default MorePagination;