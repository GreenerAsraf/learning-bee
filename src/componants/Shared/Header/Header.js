import React, { useContext } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaUser } from 'react-icons/fa';
import logo from '../../../assests/logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const toogleDarkMode = ()=> {
    const element = document.body;
    element.classList.toggle("dark-mode");
}


  const handleLogOut = () => {
   
    logOut()
        .then(() => { })
        .catch(error => console.error(error))
}
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
          <Navbar.Brand><Link to='/'>Learning Bee</Link></Navbar.Brand>
          

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                  <Nav.Link> <Link to ="/courses">COURSES </Link> </Nav.Link>
                  <Nav.Link> <Link to ="/blog">BLOG </Link> </Nav.Link>
                  <Nav.Link> <Link to ="/faq">FAQ </Link> </Nav.Link>
                  
              </Nav>
              <Nav>
                    <Button onClick={toogleDarkMode} className='text-warning'>Dark Mode</Button>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Nav.Link><Link to='/login'>Login</Link></Nav.Link>
                                        <Nav.Link><Link to='/register'>Register</Link></Nav.Link>                                   </>
                            }


                        </>
                        <Link to="/profile">
                            {user?.photoURL ?
                                <>
                                    <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image> 
                               <span className ='' data-toggle="tooltip" data-placement="bottom" title={ user?.displayName}>{ user?.displayName}</span>
                                </>
                                : <FaUser></FaUser>
                            }
                        </Link>
                    </Nav>
             
            
          </Navbar.Collapse>
      </Container>
  </Navbar>
    );
};

export default Header;