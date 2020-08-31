import styled from "styled-components";
import pattern from './../../assets/images/default_detaile.jpg';

export const InternWrapper = styled.div`
    background-image: linear-gradient(to top, rgba(0, 0, 0, .9) 0%, rgba(0, 0, 0, .8) 100%), ${(props: any) => {
        const { background, defaultBg } = props.theme;
        const url = defaultBg ? `${pattern}` : `${background.path}.${background.extension}`;

        return `url(${url})`;
    }};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    position: relative;
    min-height: 100vh;
`;

InternWrapper.defaultProps = {
    theme: {
        background: pattern,
        defaultBg: true
    }
}