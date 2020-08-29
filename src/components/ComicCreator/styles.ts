import styled from 'styled-components';

export const CreatorTooltip = styled.div`
    height: 3rem;
    width: 3rem;
    border-radius: 4px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: ${(props: any) => {
            const { background } = props.theme;

            return `url(${background.path}.${background.extension})`;
        }};
`;

export const Creator = styled.div`
    display: flex;
    border: 2px solid #FFF;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    background-image: ${(props: any) => {
        const { background } = props.theme;

        return `url(${background.path}.${background.extension})`;
    }};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`

Creator.defaultProps = {
    theme: {
        background: ''
    }
};
