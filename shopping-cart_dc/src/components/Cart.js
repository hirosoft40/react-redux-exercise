import React, { Component } from "react";
import { connect } from "react-redux";
import addProduct from "../actions/addProduct";

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const product = this.props.productCart.map(product => {
      return (
        <div>
          <p>
            {product.productName} - {product.productNumber} - $
            {product.productPrice}
        </p>
        </div>
      );
    });

    return(<div>{product}</div>);

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
      onAddProduct: productData => dispatch(addProduct(productData))
    };
  }

export default Cart;
