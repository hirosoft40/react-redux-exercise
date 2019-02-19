import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import addProduct from "../actions/addProduct";

class Modals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      productNumber: 0,
      productName: "",
      productPrice: 0
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({
      productName: this.props.productName,
      productPrice: this.props.productPrice,
      show: true
    });
  }

  addProduct(e) {
    this.setState({
      productNumber: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Button variation="primary" onClick={this.handleShow.bind(this)}>
          Add to Cart{" "}
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Add to Cart</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Would you like to add {this.props.productName} to cart?</p>
            <p>
              How many? Currently {this.props.currentProductNumber} items in
              your cart.
            </p>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select Numbers</Form.Label>
              <Form.Control as="select">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose.bind(this)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={e => this.addProduct(e)}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
        ;
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    totalCost: state.cartReducer.totalCost,
    productCart: state.cartReducer.productCart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddProduct: productData => dispatch(addProduct(productData))
  };
}

export default Modals;
