import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { Navbar } from "react-bootstrap";
//const Navbar = ({isLoggedIn}) => //for later use
const NavbarComponent = () => {
    return (_jsx(_Fragment, { children: _jsx(Navbar, { expand: "lg", bg: "dark", "data-bs-theme": "dark", children: _jsxs(Container, { className: "d-flex justify-content-between", children: [_jsx(Navbar.Brand, { className: "fs-1 fst-italic", href: "#home", children: "1%" }), _jsxs(Nav, { className: "flex-row justify-content-md-center", children: [_jsx(Nav.Link, { href: "#home", children: "Goals" }), _jsx(Nav.Link, { href: "#history", children: "History/Overview" }), _jsx(Nav.Link, { href: "#profile", children: "MyProfile" })] })] }) }) }));
};
export default NavbarComponent;
