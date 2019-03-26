import React, { Component } from "react";
import { connect } from "react-redux";
import addProduct from "../actions/addProduct";

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var product = this.props.productCart.map(item => {
      return (
        <li key={item.productName}>
          {item.productName} - {item.productCount} - ${item.subTotal}
        </li>
      );
    });

    return (
      <div>
        {product}
        <br />
        <p>Total ${this.props.totalCost}</p>
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
)(Cart);
