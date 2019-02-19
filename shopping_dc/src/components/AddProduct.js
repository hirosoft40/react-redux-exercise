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

  productNameChange(e) {
    this.setState({
      productName: e.target.value
    });
  }

  productPriceChange(e) {
    this.setState({
      productPrice: e.target.value
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
          onChange={(e) => this.productPriceChange(e)}
        />
        <br />
        {this.state.productPrice}
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
)(AddProduct);
