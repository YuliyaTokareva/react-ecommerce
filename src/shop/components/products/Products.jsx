import React from 'react';
import { connect } from 'react-redux';
import ProductCard from '../productCard/ProductCard';
import Spinner from '../spinner/Spinner';
import * as productsSelectors from '../../../shop/products.selectors';
import './products.scss';

const Products = ({ dataProducts, spinner, setPriceParam, setBrandParam }) => {
  console.log(dataProducts);
  return (
    <div className="products-body">
      <aside className="products-body__aside">
        {/* <Filter setPriceParam={setPriceParam} setBrandParam={setBrandParam} /> */}
      </aside>
      <div className="products-list">
        {/* {dataProducts.map((product) => (
          <ProductCard data={product} key={product.id.toString()} />
        ))} */}
        {/* {!dataProducts ? (
          <Spinner />
        ) : (
          dataProducts.map((product) => <ProductCard data={product} key={product.id.toString()} />)
        )} */}
        {spinner ? <Spinner /> : ''}
        {dataProducts
          ? dataProducts.map((product) => (
              <ProductCard data={product} key={product.id.toString()} />
            ))
          : ''}
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    dataProducts: productsSelectors.productsListSelector(state),
    spinner: productsSelectors.productsFetchingSelector(state)
  };
};
export default connect(mapState, null)(Products);
