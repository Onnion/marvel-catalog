import styled from 'styled-components';
import pattern from './../../assets/images/pattern.jpg';

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

HeaderWrapper.defaultProps = {
    theme: {
        background: pattern,
        defaultBg: true
    }
}