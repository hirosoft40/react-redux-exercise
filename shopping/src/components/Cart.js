import React, { Component } from "react";
import AddProduct from "../components/AddProduct";

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
          <AddProduct />
        Cart component
        {this.props.totalCost}
        <br />
        <ul>{product}</ul>
        {this.props.productCart}
        <button
          onClick={() =>
            this.props.onAddProduct({ productName: "Apples", productPrice: 2 })
          }
        >
          Click me
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

// connect this is standard way to state
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
