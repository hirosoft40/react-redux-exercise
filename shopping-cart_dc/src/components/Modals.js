import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import addProduct from "../actions/addProduct";
import uuid from "uuid";
import { connect } from "react-redux";

class Modals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      productCount: 0,
      // productName: "",
      // productPrice: 0,
      subTotal: 0
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  saveProductCount = e => {
    this.setState({
      productCount: parseInt(e.target.value)
    });
  };

  handleShow() {
    this.setState({
      // productPrice: this.props.productPrice,
      // productName: this.props.productName,
      show: true
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
            <p>How many? Currently "後で変更" items in your cart.</p>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select Numbers</Form.Label>
              <Form.Control
                as="select"
                onChange={e => this.saveProductCount(e)}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Control>
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose.bind(this)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() =>
                this.props.onAddProduct({
                  productName: this.props.productName,
                  productPrice: this.props.productPrice,
                  productCount: this.state.productCount,
                  subTotal:
                    parseInt(this.props.productPrice) *
                    parseInt(this.state.productCount)
                })
              }
            >
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
  return {
    totalCost: state.totalCost,
    productCart: state.productCart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddProduct: productData => dispatch(addProduct(productData))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modals);
