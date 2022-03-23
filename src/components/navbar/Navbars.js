import React, { Component} from 'react'
// import {Link} from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import "./Navbars.css"
import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
// import "./style.css"


export default class Navbars extends Component {
  render() {
    return (
      <Navbar className="navbar-translate" expand="md" fixed="top" variant="dark" bg="primary">
        <Container>
        <Navbar.Brand href="#home">Main</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto menumain">
            <Nav.Link className="btn btn-primary m-2" href={'./panel'}>Home</Nav.Link>
            <Nav.Link className="btn btn-primary m-2"href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
// export default class Navbars extends Component {
//   state = {
//     jumlah : 0
//   }
//     render() {
//         return (
//             <div >
//             <Navbar className="style justify-content-center" bg="dark" expand="lg">
//               <Link to ='/'>
//                 <Navbar.Brand style={{color:'white'}}>BooksStore</Navbar.Brand>
//               </Link>
//                 <Navbar.Toggle font-color="white" aria-controls="basic-navbar-nav" />
//                   <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="ml-auto">
//                   <Nav.Link ><Link to= "/" style={{color:'white'}}><b>Home</b></Link></Nav.Link>
//                   <Nav.Link><Link to="/login" style={{color:'white'}}><b>Login</b></Link></Nav.Link>
//                   <Nav.Link className="shop-cart">
//                     <FontAwesomeIcon icon={faShoppingCart}/>
//                   </Nav.Link>
//                 </Nav>
//               </Navbar.Collapse>
//             </Navbar>
//             </div>
//             )
//         }
//     }
