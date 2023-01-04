import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="footer">
      <Container className="footer-div box-1">
        <Container className="footer-links links" as={NavLink} to="/about-us">
          <h6>ABOUT US</h6>
        </Container>
        <Container className="footer-links links" as={NavLink} to="/contact-us">
          <h6>CONTACT US</h6>
        </Container>
        <Container
          className="footer-links links"
          as={NavLink}
          to="/privacy-policy"
        >
          <h6>PRIVACY POLICY</h6>
        </Container>
        <Container className="footer-links links d-flex flex-row justify-content-center align-item-center">
          <a href="#insta" className="footer-links links" target="_blank">
            <AiOutlineInstagram color="red" size={30} />{" "}
          </a>{" "}
          <a href="#facebook" className="footer-links links" target="_blank">
            {" "}
            <BsFacebook size={20} />
          </a>
        </Container>
      </Container>
      <Container as={NavLink} to="/" className="links footer-links box-2">
        <h2 style={{ fontSize: "60px" }} as={NavLink} to="/">
          Crick<span style={{ color: "#8faaaa" }}>dr</span>
        </h2>
        <p>copyright 2023 - crickdr.com</p>
      </Container>
    </div>
  );
};
