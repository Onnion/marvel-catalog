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
    min-height: ${(props: any) => props.theme.big ? 3 : 2}rem;
    min-width: ${(props: any) => props.theme.big ? 3 : 2}rem;
    background-image: ${(props: any) => {
        const { background } = props.theme;

        return `url(${background.path}.${background.extension})`;
    }};
    ${(props: any) => props.theme.big && 'margin-right: 8px; margin-bottom: 8px;'}
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`

Creator.defaultProps = {
    theme: {
        background: '',
        big: false
    }
};
