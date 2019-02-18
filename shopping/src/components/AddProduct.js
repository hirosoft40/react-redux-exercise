import React, { Component } from "react";
import addProduct from "../actions/addProduct";
import { connect } from "react-redux";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0
    };
  }

  productNameChange() {
    this.setState({
      productName: e.target.value
    });
  }

  productPriceChange(e) {
    this.setState({
      productPrice: this.state.productPrice
    });
  }

  render() {
    return (
      <div>
        {this.state.productName}
        <br />
        <input
          type="text"
          placeholder="product name"
          onChange={this.productNameChange.bind(this)}
        />
        <input
          type="text"
          placeholder="product price"
          onChange={() => this.productNameChange}
        />
        {this.state.productNameChange}
        <button
          onClick={() =>
            this.props.onAddProduct({
              productName: this.state.productName,
              productPrice: this.state.productPrice
            })
          }
        >
          Add Product
        </button>
      </div>
    );
  }
}

export default AddProduct;
