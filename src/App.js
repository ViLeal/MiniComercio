import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,} from "react-bootstrap";
import { HeaderApp } from "./components/HeaderApp.js";
import { ListProducts } from './components/ListProducts';
import { AlertProduct } from './components/AlertProduct';
const App = () => {
  return (
    <Container>
    <div className="App">
        <HeaderApp />
        <AlertProduct />
        <ListProducts />
    </div>
    </Container>
  );
}


export default App;
