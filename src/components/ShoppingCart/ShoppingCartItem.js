import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ShoppingCartItem = ({item}) => (
  <NavDropdown.Item> 
    {item.title} - {item.category} - ${item.price}
  </NavDropdown.Item>
);
