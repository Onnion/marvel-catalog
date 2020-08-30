import styled from 'styled-components';
import pattern from './../../assets/images/pattern.jpg';
import { TextField } from '@material-ui/core';
import { FaTimes } from 'react-icons/fa';

export const CancelCharacter = styled(FaTimes)`
    position: absolute;
    top: 40px;
    right: 40px;
    color: #FFF;
    font-size: 2rem;
    cursor: pointer;
`;

export const HeaderWrapper = styled.div`
    background-image: linear-gradient(to top, rgba(0, 0, 0, .9) 0%, rgba(0, 0, 0, .5) 100%), ${(props: any) => {
        const { background, defaultBg } = props.theme;
        const url = defaultBg ? `${pattern}` : `${background.path}.${background.extension}`;

        return `url(${url})`;
    }};;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 40vh;
    background-position: center;
    position: relative;
`;

export const Title = styled.h1`
    font-size: 3rem;
    color: #FFF;
    display: block;
`;

export const Description = styled.p`
    font-size: 1rem;
    color: #FFF;
    display: block;
`;

export const Search = styled(TextField)`
    background: #FFF;
    border-radius: 4px;
    width: 100%;
    color: var(--title-color);
`;

HeaderWrapper.defaultProps = {
    theme: {
        background: pattern,
        defaultBg: true
    }
}