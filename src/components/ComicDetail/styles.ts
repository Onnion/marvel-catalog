import styled from 'styled-components';
import { generateChildScape } from '../../common/utils/creators';

export const Detail = styled.div`
    position: absolute;
    background: var(--title-color);
    height: 80%;
    width: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    padding: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 -2px 15px -5px var(--title-color);
`;

export const CreatorsList = styled.div`
    width: 100%;
    display: flex;

    & > div {
        transition: .3s all;
    }

    &:hover div {
        transform: translateX(0) !important;
    } 

    ${(props: any) => generateChildScape(props.theme.creators_length)}
`;

export const Title = styled.h1`
    color: #FFF;
    font-size: .8rem;
`;

CreatorsList.defaultProps = {
    theme: {
        creators_length: 0
    }
}
