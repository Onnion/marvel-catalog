import styled from 'styled-components';
import myImage from './../../assets/images/pattern.jpg';
import { TextField } from '@material-ui/core';

export const HeaderWrapper = styled.div`
    background-image: linear-gradient(to top, rgba(0, 0, 0, .9) 0%, rgba(0, 0, 0, .5) 100%),  url(${myImage});
    background-size: cover;
    background-repeat: no-repeat;
    height: 40vh;
    background-position: center;
`;


export const Search = styled(TextField)`
    background: #FFF;
    border-radius: 4px;
    width: 100%;
    color: var(--title-color);
`