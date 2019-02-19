import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modals from "./components/Modals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import cartReducer from "./reducers";
import NavBar from "./components/NavBar";
import ProductsTable from "./components/ProductsTable";
import Cart from "./components/Cart";
import { Container, Row, Col } from "react-bootstrap";

const store = createStore(cartReducer);

ReactDOM.render(
  <Provider store={store}>
    <NavBar style={{ marginTop: "10px" }} />
    <Container>
      <Row>
        <Col md={8}>
          <ProductsTable />
        </Col>
        <Col md={4}>
          <Cart />
        </Col>
      </Row>
    </Container>
  </Provider>,
  document.getElementById("root")
);
