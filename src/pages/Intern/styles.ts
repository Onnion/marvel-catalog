import styled from "styled-components";
import pattern from './../../assets/images/default_detaile.jpg';

export const InternWrapper = styled.div`
    background-image: linear-gradient(to top, rgba(0, 0, 0, .9) 0%, rgba(0, 0, 0, .7) 100%), ${(props: any) => {
        const { background } = props.theme;
        const url = background ? `${background?.path}.${background?.extension}` : `${pattern}`;

        return `url(${url})`;
    }};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    position: relative;
    min-height: 100vh;
`;


export const CreatorsList = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    & > div {
        transition: .3s all;
        cursor: pointer
    }
`;

export const Title = styled.h1`
    color: #FFF;
    font-weight: 900;
    font-size: 2rem
`;

export const Field = styled.h2`
    color: #FFF;
    font-weight: 900;
    font-size: 1.5rem;
    margin-bottom: 15px;
`;

export const Text = styled.p`
    color: #FFF;
    font-weight: 500;
    font-size: 1.2rem
`;

InternWrapper.defaultProps = {
    theme: {
        background: pattern,
    }
}