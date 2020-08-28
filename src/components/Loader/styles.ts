import styled, { keyframes } from 'styled-components';
import { FaCog } from 'react-icons/fa';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spin = styled(FaCog)`
    font-size: 2rem;
    color: #FFF;
    animation: ${rotate} 2s linear infinite;
`