function cartReducer(state, action) {
  if (state === undefined) {
    return {
      productCart: [],
      totalCost: 0
    };
  }

  const { productName, productPrice, productCount, subTotal } = action.product;

  switch (action.type) {
    case "addProduct":
      return {
        ...state,
        totalCost:state.totalCost + parseInt(subTotal),
        productCart: state.productCart.concat({
          productName,
          productPrice,
          productCount,
          subTotal
        })
      };
    default:
      return state;
  }
}

export default cartReducer;
