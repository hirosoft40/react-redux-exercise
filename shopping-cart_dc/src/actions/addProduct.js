function addProduct(item) {
  return {
    type: "addProduct",
    product: {
      productName: item.productName,
      productCount: item.productCount,
      productPrice: item.productPrice,
      subTotal:item.subTotal
    }
  };
}

export default addProduct;
