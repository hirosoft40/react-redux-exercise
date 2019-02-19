function cartReducer(state, action) {
  if (state === undefined) {
    return {
      productCart: [],
      totalCost: 0
    };
  }

  const { productName, productPrice, productNumber } = action.product;

  switch (action.type) {
    case "addProduct":
      return {
        ...state,
        totalCost:
          state.totalCost + parseInt(productPrice) * parseInt(productNumber),
        productCart: state.productCart.concat({
          productName,
          productPrice,
          productNumber
        })
      };
    default:
      return state;
  }
}

export default cartReducer;
