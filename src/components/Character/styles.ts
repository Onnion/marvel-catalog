import styled from 'styled-components';

export const CardHeader = styled.div`
    padding-top: 80%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: ${(props: any) => {
        const { background } = props.theme;

        return `url(${background.path}.${background.extension})`;
    }};
`;

export const Title = styled.h1`
    font-size: .9rem;
    text-transform: uppercase;
    color: #FFF;
`;

export const CardBody = styled.div`
    background: var(--title-color);
    height: 8rem;
    position: relative;
    border-top: 4px solid var(--marvel);
    padding: 10px;
`;

export const Card = styled.div`
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &.active #body {
       background: var(--marvel);


       & h1 {
            color: var(--bg-light);
       }
    }
    

    &:after {
        position: absolute;
        bottom: 0;
        right: 0;
        content: '';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 1rem 1rem;
        border-color:  transparent transparent var(--bg-light) transparent;
    }
`

Card.defaultProps = {
    theme: {
        background: ''
    }
};
