import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

export const Nav = styled.div`
    background: var(--title-color);
    padding: 20px 0px;
    text-align: start;
`;

export const BackWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    cursor: pointer;
    
    & > svg {
        transition: .3s all;
    }

    &:hover svg {
        transform: translateX(-10px);
    }
`;

export const Back = styled(FaArrowLeft)`
    color: var(--marvel);
    margin-right: 20px;
    transform: translateX(15px);
`;

export const BackText = styled.div`
    color: #FFF;
    font-size: 1rem;
    text-transform: uppercase;
`;