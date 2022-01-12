import React from "react";
import { Container } from "react-bootstrap";
import { ListProducts } from "../components/ListProducts";
import { AlertProduct } from "../components/AlertProduct";

export const Home = () => (

  <Container>
    <div className="App">
      <AlertProduct />
      <ListProducts />
    </div>
  </Container>
);