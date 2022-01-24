import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

interface IHeaderProps {
}

const Header: React.FC<IHeaderProps> = (props) => {

    return (
        <div>
            <Navbar fixed='top' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand>
                        React Typescript Bootstrap
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );

}

export default Header;
