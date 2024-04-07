const initialState = {
    products: [],
    loading: false,
    error: null,
};

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_PRODUCT_STARTED': {
            return {products: state, loading: true, error: null}
        }
        case 'FETCH_PRODUCT_SUCCESS': {
            return {products: action.products , loading: false, error: null}
        }
        default: {
            return state;
        }
    }
}

export default productReducer;
