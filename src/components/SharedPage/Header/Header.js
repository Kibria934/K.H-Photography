import React, { useEffect, useState } from "react";
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
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  // console.log(user);

  useEffect(() => {
    setName(user?.displayName);
    // console.log(user);
    if (loading) {
      <p>loading...</p>;
    }
  }, [user, loading]);

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
                {user ? (
                  <span
                    onClick={() => signOut(auth)}
                    className="text-decoration-none px-4  text-black "
                  >
                    Signout
                  </span>
                ) : (
                  <Link
                    className="text-decoration-none text-black px-4 "
                    to="/signin"
                  >
                    SingIn
                  </Link>
                )}
              </Nav.Link>
              <Nav.Link></Nav.Link>
            </Nav>
            <Nav.Link>
              <span className="text-decoration-none text-black px-4 ">
                {loading && "loadig..."}
                {user ? user?.displayName : name}
              </span>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
