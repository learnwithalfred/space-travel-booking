import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Header = () => (
  <Navbar bg="light" expand="lg" className="bg-white">
    <Container>
      <Navbar.Brand href="#home">
        <Link to="/">
          <div clasName="d-flex justify-content-start">
          <img src={logo} alt="Keep" width="50" className="me-3" />
            <h1>Space Travel Hub</h1>
            </div>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="me-auto justify-content-end w-100">
          <NavLink to="/" className="nav-link">
            Rockets
          </NavLink>
          <NavLink to="/missions" className="nav-link">
            Launchpads
          </NavLink>
          <NavLink to="/profile" className="nav-link">
            | Profile
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
