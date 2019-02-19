import React, { Component } from "react";
import { connect } from "react-redux";
import addProduct from "../actions/addProduct";
import deleteProduct from "../actions/deleteProduct";
import AddProduct from "./AddProduct";

class Cart extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    var product = this.props.productCart.map(product => {
      return <li key={product.productName}>{product.productName}</li>;
    });
    return (
      <div>
        <h2>Total Price {this.props.totalCost}</h2>
        <AddProduct />

        <table>
          <thead>
            <tr>
              <td>Product Name</td>
              <td>Product Price</td>
              <td>#</td>
            </tr>
          </thead>
          <tbody>
            {this.props.productCart.map(productData => {
              return (
                <tr key={productData.productName}>
                  <td>{productData.productName}</td>
                  <td>{productData.productPrice}</td>
                  <td onClick={() => this.props.onDeleteProduct(productData)}>
                    Remove
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    totalCost: state.cartReducer.totalCost,
    productCart: state.cartReducer.productCart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddProduct: productData => dispatch(addProduct(productData)),
    onDeleteProduct: productData => dispatch(deleteProduct(productData))
  };
}

// connect this is standard way to state
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
