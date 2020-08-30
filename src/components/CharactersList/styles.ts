import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;

    @media(max-width: 991px) {
        grid-template-columns: repeat(5, 1fr);
    }

    @media(max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media(max-width: 585px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;