import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const CancelCharacter = styled(FaTimes)`
    position: absolute;
    top: 40px;
    right: 40px;
    color: #FFF;
    font-size: 2rem;
    cursor: pointer;
`;

export const Title = styled.h1`
    font-size: 3rem;
    color: #FFF;
    display: block;
`;

export const Description = styled.p`
    font-size: 1rem;
    color: #FFF;
    display: block;
`;
