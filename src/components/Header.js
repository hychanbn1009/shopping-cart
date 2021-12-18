import React from 'react'
import {NavLink} from "react-router-dom";
import '../styles/header.css'
import {Container,Navbar,Nav } from 'react-bootstrap';
import { Icon } from '@iconify/react';

const Header=(props)=>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
            <Navbar.Brand className="navbar-brand" href="#home">Zaku Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/products" className="nav-link">Products</NavLink>
                        <NavLink to="/shopping_cart" className="nav-link"><Icon icon="bi:cart"  inline={true} />{props.itemCount}</NavLink> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
