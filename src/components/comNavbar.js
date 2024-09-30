import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'

const ComNavbar = () => {
    return(
    <>
        <Navbar expand="lg" bg='danger' data-bs-theme="dark" sticky='top'>
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav"/>
                <Navbar.Collapse id="navbar-nav" className='justify-content-end'>
                    <Nav className="me-auto">
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Button variant="success">success</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    )
}

export default ComNavbar