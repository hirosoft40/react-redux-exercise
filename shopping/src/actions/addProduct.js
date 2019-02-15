function addProduct(item) {
  return {
    type: "ADD_PRODUCT",
    productData: {
      productName: item.productName,
      productPrice: item.productPrice
    }
  };
}

export default addProduct;
