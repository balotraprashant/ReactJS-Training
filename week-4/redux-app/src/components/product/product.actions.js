export const fetchProductsStart = () => ({
    type: 'FETCH_PRODUCT_STARTED'
});

export const fetchProductsSuccess = (products) => ({
    type: 'FETCH_PRODUCT_SUCCESS',
    products
});

export const doFetchProducts = () => (dispatch) => {
    dispatch(fetchProductsStart);
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(products => {
        console.log(products)
        dispatch(fetchProductsSuccess(products));
      });
}