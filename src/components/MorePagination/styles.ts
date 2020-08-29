import styled, { keyframes } from 'styled-components';
import { FaPlus, FaCog } from 'react-icons/fa';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Plus = styled(FaPlus)`
    font-size: 1rem;
    color: var(--bg-dark);
`;

export const Spin = styled(FaCog)`
    font-size: 1rem;
    color: var(--bg-dark);
    animation: ${rotate} 2s linear;

`;

export const FabMorePagination = styled.div`
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    justify-content: center;
    overflow: hidden;
    border-radius: 50%;
    margin: 20px auto;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    width: 3rem;
    height: 3rem;
    background: #FFF;

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
        box-shadow: 0 0px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`;

