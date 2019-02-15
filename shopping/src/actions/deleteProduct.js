
const deleteProduct = (id) => {
  return(
      {
          type:'deleteProduct',
          productId:id
      }
  )
};

export default deleteProduct;