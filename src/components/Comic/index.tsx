import React from 'react';
import { Card } from './styles';
import { Comic as ComicType } from '../../common/types/marvel';

interface Props {
    comic: ComicType;
}

export const Comic: React.FC<Props> = (props: Props) => {
    const { comic } = props;
    
    return (
        <Card>
            {comic.title}
        </Card>
    );
}

export default Comic;