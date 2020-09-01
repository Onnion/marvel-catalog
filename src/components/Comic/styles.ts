import styled from 'styled-components';

export const TrasitionWrapper = styled.div`
    .detail-enter { }
    .detail-enter-active {transform: rotateX(0); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
    .detail-enter-done { }
    .detail-exit { }
    .detail-exit-active {transform: translateY(180%); transition: transform 0.3s cubic-bezier(0.55, 0, 1, 0.45)}
`;

export const Card = styled.div`
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding-top: 150%;
    width: 100%;
    background-size: cover;
    background-image: ${(props: any) => {
        const { background } = props.theme;

        return `url(${background.path}.${background.extension})`;
    }};
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`

Card.defaultProps = {
    theme: {
        background: ''
    }
};
