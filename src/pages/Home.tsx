import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes';
import * as productsActions from '../shop/products.actions';
import * as productsSelectors from '../shop/products.selectors';

const Home = ({ getCandidatesList }) => {
  useEffect(() => {
    getCandidatesList();
  }, []);
  const navigate = useNavigate();
  return <h1 onClick={() => navigate(ROUTES.pageId(1))}>home</h1>;
};

const mapDispatch = (dispatch) => {
  return {
    getCandidatesList: () => dispatch(productsActions.getCandidatesList())
  };
};
const mapState = (state) => {
  return {
    candidatesList: productsSelectors.productsListSelector(state)
  };
};
export default connect(mapState, mapDispatch)(Home);
