import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../../assests/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark">
      <Container>
      <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          <Navbar.Brand><Link to='/'>Programming Bee</Link></Navbar.Brand>
          

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                  <Nav.Link> <Link to ="/courses">COURSES </Link> </Nav.Link>
                  <Nav.Link> <Link to ="/blog">BLOG </Link> </Nav.Link>
                  <Nav.Link> <Link to ="/faq">FAQ </Link> </Nav.Link>
                  <Nav.Link> <Link to ="/login">Login </Link> </Nav.Link>
                  <Nav.Link> <Link to ="/register">Register </Link> </Nav.Link>

                  
              </Nav>
              <Nav>
             <Nav.Link href="#deets">More deets</Nav.Link>
             <Nav.Link eventKey={2} href="#memes">
               Dank memes
             </Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
      </Container>
  </Navbar>

  



    //     <div>
    //     <Navbar bg="dark" variant="dark">
    //     <Container>
    //     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        
    //       <Navbar.Brand href="#home">
    //         <img
    //           alt=""
    //           src={logo}
    //           width="30"
    //           height="30"
    //           className="d-inline-block align-top"
    //         />{' '}
    //         Programming Bee
    //       </Navbar.Brand>
    //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     {/* .................................................
    //     copy 
    //     ................................................. */}


      
        
       

    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#features">Courses</Nav.Link>
    //         <Nav.Link href="#pricing">Blog</Nav.Link>
    //         <Nav.Link href="#pricing">FAQ</Nav.Link>
            
    //       </Nav>
    //       <Nav>
    //         <Nav.Link href="#deets">More deets</Nav.Link>
    //         <Nav.Link eventKey={2} href="#memes">
    //           Dank memes
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
     
    // </Navbar>

    //     </Container>
    //   </Navbar>
    //     </div>
    );
};

export default Header;