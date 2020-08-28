import React, { useEffect } from 'react';
import { Title } from './styles';
import { api } from '../../services/marvel';

export const Home: React.FC = () => {

    async function getComics() {
        const comics = await api.get('/comics');
        console.log(comics);
    }

    useEffect(() => {
        getComics();
    }, []);

    return (
        <Title>Home</Title>
    )
}

export default Home;