import React from "react";
import "./Header.css";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid className="d-flex justify-content-">
          <Navbar.Brand href="#home">
            <div className="d-flex w-100 h-100 align-items-center flex-row">
              <span>K.H</span>
              <span className="logo px-3 fs-6">Photographer</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link
                  className="text-decoration-none sm-ms-4 text-black px-3 nav-part"
                  to="/"
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="text-decoration-none text-black px-4 "
                  to="/blog"
                >
                  Blog
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="text-decoration-none text-black px-4 "
                  to="/about"
                >
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="text-decoration-none text-black px-4 "
                  to="/signin"
                >
                  Signin
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="text-decoration-none px-4  text-black "
                  to="/signout"
                >
                  Signout
                </Link>
              </Nav.Link>
              {/* <div className="navbar-div">
                <Link className="text-decoration-none ms-4 text-black" className="text-decoration-none text-black " to="/">
                  Home
                </Link>
                <Link
                  className="text-decoration-none ms-4 text-black"
                  className="text-decoration-none text-black " to="/blog"
                >
                  blog
                </Link>
                <Link
                  className="text-decoration-none ms-4 text-black"
                  className="text-decoration-none text-black " to="/about"
                >
                  About
                </Link>
                <Link
                  className="text-decoration-none ms-4 text-black"
                  className="text-decoration-none text-black " to="/signin"
                >
                  Signin
                </Link>
                <Link
                  className="text-decoration-none ms-4 text-black"
                  className="text-decoration-none text-black " to="/signout"
                >
                  Signup
                </Link>
              </div> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
