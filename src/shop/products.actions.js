import { getProducts } from './productsGateway';

export const PRODUCTS_LIST_RECIEVED = 'PRODUCTS_LIST_RECIEVED';
export const SHOW_SPINNER = 'SHOW_SPINNER';

export const showSpinner = () => ({
  type: SHOW_SPINNER
});
export const fetchCandidatesListRecieved = (productsList) => {
  const action = {
    type: PRODUCTS_LIST_RECIEVED,
    payload: {
      productsList
    }
  };
  return action;
};

export const getProductList = () => {
  // eslint-disable-next-line
  const thunkAction = function (dispatch) {
    dispatch(showSpinner());
    getProducts().then((productsList) => dispatch(fetchCandidatesListRecieved(productsList)));
  };
  return thunkAction;
};
