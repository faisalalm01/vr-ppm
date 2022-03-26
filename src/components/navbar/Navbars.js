import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown  } from 'react-bootstrap';
import '../style.css';

export default class Navbars extends Component {
  render() {
    return (

<nav className=" navbar-expand-lg navbar-light fixed-top ">

<Navbar className='style' expand="lg" bg="danger" variant='light'>
<Navbar.Brand className="navbar-brand test" href="#">VrTour App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav "/>
                <Navbar.Collapse id=" mr-auto basic-navbar-nav ">
                    <Nav className="ml-auto ">                                                   
                    <Nav.Item >
                        <Nav.Link>
                        <Link className="text-white" to="/">Home</Link>
                        </Nav.Link>
                    </Nav.Item >
                    <NavDropdown title={ <span className="text-white">Attractions</span>} id="basic-nav-dropdown" >
                            <NavDropdown.Item href="/viewattractions">View Attraction</NavDropdown.Item>
                            <NavDropdown.Item href="/addattractions">Add Attractions</NavDropdown.Item>
                        </NavDropdown>
                    <Nav.Item>
                        <Nav.Link>
                        <Link className="text-white" to="/about">About</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                        <Link className="text-white" to="/#">Contact</Link>
                        </Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </nav>
    )
}
}
