import React, { Component } from 'react'
import {
    Container,
    Nav,
    Navbar,
  } from "react-bootstrap";
  // import { Link } from 'react-router-dom'

export default class NavPanel extends Component {
        render() {
            return (
             
        
              <Navbar  scrolling dark expand="md" fixed="top" variant="dark" >
                <Container>
                {/* <Navbar.Brand href="#home">Mine</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto menumain">
                    {/* <Link to={'/'}> */}
                      <Nav.Link className="btn btn-primary m-2" bg="dark" href={'./'}>Back To Landing Page</Nav.Link>
                      {/* </Link> */}
                  </Nav>
                </Navbar.Collapse>
                </Container>
              </Navbar>
            );
          }
        }