import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const NavHeader = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };
  return (
    <Navbar bg="light" expand="lg" className="bg-white border-bottom">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className="text-decoration-none">
            <div className="d-flex justify-content-start align-items-center">
              <img src={logo} alt="Keep" width="50" className="me-3" />
              <h1 className="h3 text-black">Space Travel Hub</h1>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto justify-content-end w-100">
            <NavLink
              to="/"
              className="nav-link"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Rockets
            </NavLink>
            <NavLink
              to="/missions"
              className="nav-link"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Missions
            </NavLink>
            <NavLink
              to="/profile"
              className="nav-link"
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              | Profile
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
