import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart"
import { Navbar, Container } from "react-bootstrap";
const style = {
    marginBottom: "30px",
  };
  

export const HeaderApp = () => (
        <Navbar bg="dark" variant="dark" style={style}>
          <Container>
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Mini Ecommerce
        </Navbar.Brand>
            <ShoppingCart />
          </Container>
        </Navbar>
      );