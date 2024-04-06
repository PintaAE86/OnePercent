import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

//const Navbar = ({isLoggedIn}) => //for later use
const NavbarComponent = () => {
  return (
    <>
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand className="fs-1 fst-italic" href="#home">1%</Navbar.Brand>
        <Nav className="flex-row justify-content-md-center" >
          <Nav.Link  href="#home">Goals</Nav.Link>
          <Nav.Link href="#history">History/Overview</Nav.Link>
          <Nav.Link href="#profile">MyProfile</Nav.Link>
        </Nav>

      </Container>
    </Navbar>
    </>
    )
}

export default NavbarComponent;