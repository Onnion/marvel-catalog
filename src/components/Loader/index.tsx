import React from 'react';
import FullScreen from '../FullScreen';
import { Spin } from './styles';

export const Loader: React.FC = () => {
    return (
        <FullScreen>
            <Spin />
        </FullScreen>
    );
}

export default Loader;