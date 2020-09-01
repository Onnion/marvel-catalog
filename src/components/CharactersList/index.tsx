import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../store';
import OwlCarousel from 'react-owl-carousel2';
import Character from '../Character';
import 'react-owl-carousel2/lib/styles.css';

export const CharactersList: React.FC = () => {
    const { characters, loading } = useSelector((state: State) => state.characters);
    const options = {
        items: 8,
        nav: false,
        dot: false,
        rewind: false,
        autoplay: true,
        margin: 20,
        responsive: {
            0: {
                items: 2,
            },
            450: {
                items: 3,
            },
            768: {
                items: 5,
            },
            991: {
                items: 7,
            },
        }
    };
    const events = {
        onDragged: (event) => { },
        onChanged: (event) => { },
    };

    return (
        <div className="container">
            <div className="row" style={{ transform: 'translateY(-3rem)' }}>
                <div className="col">

                    {!loading && <OwlCarousel options={options} events={events} >
                        {characters.map((character) => <div key={character.id}><Character character={character} /></div>)}
                    </OwlCarousel>}
                </div>
            </div>
        </div>

    );
}

export default CharactersList;