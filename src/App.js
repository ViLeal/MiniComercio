import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, } from "react-bootstrap";
import { HeaderApp } from "./components/HeaderApp";
import { Home } from "../src/views/Home";
import { Route, Switch, Redirect } from 'react-router-dom';
import { ProductView } from './views/ProductViews';
import { PurchaseView } from './views/PurchaseView';
const App = () => {
  return (
    <Container>
      <div className="App">
        <HeaderApp />
        <Switch>
          <Route path={"/product/:id"} exact component={ProductView} />
          <Route path ={"/purchase"} exact component={PurchaseView} />
          <Route path={"/"} exact component={Home} />
          <Route render={() => <Redirect to={"/"} />} />

        </Switch>
      </div>
    </Container>
  );
}


export default App;
