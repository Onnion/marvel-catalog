import React from 'react';
import { Detail, Title, CreatorsList } from './styles';
import { Comic, Creator } from '../../common/types/marvel';
import ComicCreator from '../ComicCreator';
import { ThemeProvider } from 'styled-components';

export interface ComicDetailProps {
    comic: Comic;
    creators: Creator[] | undefined;
    creators_length: number;
}

export const ComicDetail: React.FC<ComicDetailProps> = (props: ComicDetailProps) => {
    const { creators, comic, creators_length } = props;

    return (
        <Detail>
            <Title>{comic.title}</Title>

            <ThemeProvider theme={{ creators_length }}>
                <CreatorsList>
                    {
                        creators?.map(creator => <ComicCreator key={creator.id} creator={creator} />)
                    }
                </CreatorsList>
            </ThemeProvider>
        </Detail>
    );
}

export default ComicDetail;