import React from 'react';
import { Creator, CreatorTooltip } from './styles';
import { ThemeProvider } from 'styled-components';
import { Creator as CreatorType } from '../../common/types/marvel';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

export interface ComicProps {
    creator: CreatorType;
}

export const ComicCreator: React.FC<ComicProps> = (props: ComicProps) => {
    const { creator } = props;

    return (
        <ThemeProvider theme={{ background: creator.thumbnail }}>
            <Tooltip
                disableFocusListener
                disableTouchListener
                TransitionComponent={Zoom}
                placement="top"
                interactive
                title={
                    <div className="d-flex align-items-center">
                        <CreatorTooltip className="mr-2"></CreatorTooltip>
                        <span>{creator.fullName}</span>
                    </div>
                }>
                <Creator></Creator>
            </Tooltip>
        </ThemeProvider>
    );
}

export default ComicCreator;