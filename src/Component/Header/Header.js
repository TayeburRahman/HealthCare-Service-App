import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Header.css";
import logo from "../../image/Logo.png";
import useAuth from "../../Firebase/HooksFirebase/useAuth";

const Header = () => {
  const { user, logOut } = useAuth([]);
  console.log('userss' ,user);
  return (
    <div className="header">
      <Navbar
        bg="light "
        variant="light"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container className="header-Container  ">
          <Navbar.Brand as={Link} to="#home" className="text-primary me-5 pe-5">
            <h4>
              <img
                alt=""
                src={logo}
                width="30%"
                height="50"
                className="d-inline-block mb-2"
              />
              Availl Hospital
            </h4>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link
                className="text-manus  text-danger rounded pe-3 ps-3"
                as={HashLink}
                to="/home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="text-manus text-danger rounded pe-3 ps-3"
                as={HashLink}
                to="/home#services"
              >
                Services
              </Nav.Link>
              <Nav.Link
                className="text-manus  rounded  text-danger  pe-3 ps-3"
                as={HashLink}
                to="/doctor&depertment"
              >
                Depertment & Doctor
              </Nav.Link>
              <Nav.Link
                className="text-manus   text-danger rounded pe-3 ps-3"
                as={HashLink}
                to="/about"
              >
                About Us
              </Nav.Link>
            </Nav>
            <Navbar.Text className="p-2">{user.displayName} </Navbar.Text>
            <Navbar.Text>
              {user?.email ? (
                <button className="button-manus rounded  me-5" onClick={logOut}>
                  Log Out
                </button>
              ) : (
                <Nav.Link
                  to="/login"
                  className="button-manus text-light rounded me-5"
                  as={HashLink}
                >
                  LogIn{" "}
                </Nav.Link>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
