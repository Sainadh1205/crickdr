import React from "react";
import "./NavHeader.css";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavHeader = () => {
  const countries = [
    "India",
    "australia",
    "england",
    "south africa",
    "pakistan",
    "bangladesh",
    "sri lanka",
    "west indies",
    "afganistan",
  ];
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        className="nav-container m-auto"
        variant="dark"
        style={{
          height: "100px",
          width: "100%",
          zIndex: 10,
          // background:
          //   "linear-gradient(to right,547b41, lightblue, #00d9ff, white)",
          backgroundColor: "#4b5f5e",
        }}
      >
        <Container>
          <Navbar.Brand
            as={NavLink}
            to={"/"}
            style={{ fontSize: "60px", marginRight: "30px" }}
          >
            Crick<span style={{ color: "#8faaaa" }}>dr</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            id="nav-toggle"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">
                <span className="nav-text">score-card</span>{" "}
              </Nav.Link>
              <Nav.Link href="#pricing">
                <span className="nav-text">crickdr-advice</span>{" "}
              </Nav.Link>
              <Nav.Link href="#pricing">
                <span className="nav-text">ipl</span>{" "}
              </Nav.Link>
              <Nav.Link href="#pricing">
                <span className="nav-text">news</span>{" "}
              </Nav.Link>
              <Nav.Link href="#pricing">
                <span className="nav-text">crickdr-match preview</span>{" "}
              </Nav.Link>
              <NavDropdown
                title="Teams"
                className="nav-text"
                id="collasible-nav-dropdown"
              >
                {countries.map((country, index) => (
                  <NavDropdown.Item href="#action/3.1" key={index}>
                    {country}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="bottom">
        {countries.map((country, index) => (
          <a
            className="countries"
            href={`${country.split(" ").join("")}`}
            key={index}
          >
            {country}
          </a>
        ))}
      </div>
    </>
  );
};
