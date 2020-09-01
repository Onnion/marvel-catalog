import React from 'react';
import { Nav, Back, BackText, BackWrapper } from './styles';
import { Link } from 'react-router-dom';


export const InternNav: React.FC = () => {

    return (
        <Nav>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to={{
                            pathname: "/",
                        }}>
                            <BackWrapper>
                                <Back />
                                <BackText>voltar</BackText>
                            </BackWrapper>
                        </Link>
                    </div>
                </div>
            </div>
        </Nav>
    );
}

export default InternNav;