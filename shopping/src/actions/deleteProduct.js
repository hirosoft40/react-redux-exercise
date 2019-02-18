const deleteProduct = id => {
  return {
    type: "DELETE_PRODUCT",
    productId: id
  };
};

export default deleteProduct;
