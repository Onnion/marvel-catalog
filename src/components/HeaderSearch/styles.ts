import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { FaTimes } from 'react-icons/fa';

export const RemoveSearch = styled(FaTimes)`
    color: var(--title-color);
    font-size: .8rem;
    margin-left: 15px;
`;

export const Badge = styled.span`
    background:  var(--bg-light);
    padding: 5px 20px;
    color: var(--title-color);
    cursor: pointer;
    font-weight: 900;
    font-size: .8rem;
    margin-bottom: 10px;
    width: max-content;
    border-radius: 25px;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

export const Search = styled(TextField)`
    background: #FFF;
    border-radius: 4px;
    width: 100%;
    color: var(--title-color);
`;
