import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../store';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import { Image } from '../../common/types/marvel';

export const InternVariants: React.FC = () => {
    const { comic } = useSelector((state: State) => state.comics);
    const [activeCarousel, setActiveCarousel] = useState(false);
    const [thumbnail, setThumbnail] = useState('');
    const [variants, setVariants] = useState<Image[]>([]);

    const options = {
        items: 1,
        loop: true,
        rewind: true,
        autoplay: true,
        margin: 20,
    };

    const events = {
        onDragged: (event) => { },
        onChanged: (event) => { },
    };

    function generateThumbnail(thumbnail: { path: string, extension: string } | undefined): string {
        return thumbnail ? `${thumbnail.path}.${thumbnail.extension}` : '';
    }

    useEffect(() => {
        const variantsData = (comic && comic?.variantsData) ? comic.variantsData : [];
        setActiveCarousel(variantsData.length > 1);
        setVariants(variantsData);
        setThumbnail(generateThumbnail(comic?.thumbnail));
    }, [comic]);

    return (
        <>
            {activeCarousel
                ?
                <OwlCarousel options={options} events={events} >
                    {variants.map((variant, index) => <img key={index} src={generateThumbnail(variant)} style={{ width: '100%' }} />)}
                </OwlCarousel>

                : <img src={thumbnail} style={{ width: '100%' }} />

            }
        </>
    );
}

export default InternVariants;