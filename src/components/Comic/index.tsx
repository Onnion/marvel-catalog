import React, { useState, useEffect } from 'react';
import { Card, TrasitionWrapper } from './styles';
import { Comic as ComicType } from '../../common/types/marvel';
import { ThemeProvider } from 'styled-components';
import { useDispatch } from 'react-redux';
import { CreatorsTypes } from '../../store/ducks/creators/types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useHistory } from "react-router-dom";
import { ComicsTypes } from '../../store/ducks/comics/types';
import ComicDetail from '../ComicDetail';
import Loader from '../Loader';
import { VariantsTypes } from '../../store/ducks/variants/types';

export interface ComicProps {
    comic: ComicType;
}

export const Comic: React.FC<ComicProps> = (props: ComicProps) => {
    const { comic } = props;
    const [showDetail, setShowDetail] = useState(false);
    const [creators, setCreators] = useState<any[]>();
    const [loading, setLoading] = useState(false);
    const CREATORS_LENGTH = 3;

    const dispatch = useDispatch();
    const history = useHistory();

    function getCreators() {
        if (!comic.creators.data) {
            dispatch({ type: CreatorsTypes.LOAD, payload: comic.id });
        }
    }

    function handleClick() {
        dispatch({ type: ComicsTypes.SET, payload: comic });
        dispatch({ type: VariantsTypes.LOAD, payload: comic });
        history.push("/detail");
    }

    useEffect(() => {
        if (creators !== comic.creators.data) {
            let data: any[] = comic.creators?.data || [];
            data = data.length >= (CREATORS_LENGTH + 1) ? data.slice(0, CREATORS_LENGTH) : data;
            setCreators(data);
        }
    }, [props]);

    useEffect(() => {
        setLoading(showDetail);

        if (showDetail) {
            getCreators();
        }

    }, [showDetail]);

    return (

            <div
                onClick={handleClick}
                onMouseEnter={() => setShowDetail(true)}
                onMouseLeave={() => setShowDetail(false)}
            >
                <ThemeProvider theme={{ background: comic.thumbnail }}>
                    <Card>
                        <TransitionGroup component={TrasitionWrapper}>
                            <CSSTransition key={`${showDetail}`} timeout={500} classNames={'detail'}>
                                <>
                                    {
                                        loading
                                            ? creators
                                                ? <ComicDetail creators_length={CREATORS_LENGTH} comic={comic} creators={creators} />
                                                : < Loader />
                                            : null
                                    }
                                </>
                            </CSSTransition>
                        </TransitionGroup>
                    </Card>
                </ThemeProvider>
            </div>
    );
}

export default Comic;