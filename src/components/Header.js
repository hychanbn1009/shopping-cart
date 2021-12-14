import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/header.css'

const Header=()=>{
    return(
        <div className='header'>
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Zaku Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/products">Products</Nav.Link>
                <Nav.Link>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Header