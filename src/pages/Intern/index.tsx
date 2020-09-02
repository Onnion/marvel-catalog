import React from 'react';
import { InternWrapper, Title, CreatorsList, Text, Field } from './styles';
import InternNav from '../../components/InternNav';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { State } from '../../store';
import InternVariants from '../../components/InternVariants';
import ComicCreator from '../../components/ComicCreator';

export const Intern: React.FC = () => {
    const { comic } = useSelector((state: State) => state.comics);

    function decodeHtml(html?: string): { __html: string } {
        return { __html: html || '' };
    }

    return (
        <>
            <ThemeProvider theme={{ background: comic?.thumbnail }}>
                <InternWrapper>
                    <InternNav />
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-5">
                                <InternVariants />
                            </div>

                            <div className="col-md-7">
                                <div className="row">
                                    <div className="col">
                                        <Title>{comic?.title}</Title>
                                    </div>
                                </div>
                                <div className="row m3-5">
                                    <div className="col">
                                        <Text dangerouslySetInnerHTML={decodeHtml(comic?.description)}></Text>
                                    </div>
                                </div>
                                <div className="row my-5">
                                    <div className="col">
                                        <Field>Creators</Field>
                                        <CreatorsList data-testid="creatorsList">
                                            {
                                                comic?.creators.data?.map((creator, index) => <ComicCreator data-testid="creatorList__creator" big={true} key={index} creator={creator} />)
                                            }
                                        </CreatorsList>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </InternWrapper>
            </ThemeProvider>
        </>
    )
}

export default Intern;