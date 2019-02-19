import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Modals from "./Modals";

class ProductsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0
    };
  }

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>price</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mars</td>
              <td>2</td>
              <td>
                <Modals productName="Mars" productPrice={2} />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Milkyway</td>
              <td>3</td>
              <td>
                <Modals productName="Milkyway" productPrice={3} />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>KitKat</td>
              <td>1</td>
              <td>
                <Modals productName="KitKat" productPrice={1} />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Crunch</td>
              <td>5</td>
              <td>
                <Modals productName="Crunch" productPrice={5} />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ProductsTable;