function addProduct(item) {
  return {
    type: "addProduct",
    product: {
      productName: item.productName,
      productNumber: item.productNumber,
      productPrice:item.productPrice
    }
  };
}

export default addProduct;
