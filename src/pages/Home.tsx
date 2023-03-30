import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Products from '../shop/components/products/Products';
import Wrapper from '../shop/components/wrapper/Wrapper';

import * as productsActions from '../shop/products.actions';
import * as productsSelectors from '../shop/products.selectors';

const Home = ({ getProductList }) => {
  useEffect(() => {
    getProductList();
  }, []);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Products />
    </Wrapper>
  );
};

const mapDispatch = (dispatch) => {
  return {
    getProductList: () => dispatch(productsActions.getProductList())
  };
};
const mapState = (state) => {
  return {
    candidatesList: productsSelectors.productsListSelector(state)
  };
};
export default connect(mapState, mapDispatch)(Home);
