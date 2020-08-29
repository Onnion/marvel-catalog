import styled from 'styled-components';
import myImage from './assets/images/pattern.jpg';


export const HeaderWrapper = styled.div`
    background-image: linear-gradient(to top, rgba(0, 0, 0, .9) 0%, rgba(0, 0, 0, .5) 100%),  url(${myImage});
    background-size: cover;
    background-repeat: no-repeat;
    height: 30vh;
    background-position: center;
`;

export const Header = styled.div``;

export const Body = styled.div`
    min-height: 70vh;
    position: relative;
    background: var(--bg-light);
`;